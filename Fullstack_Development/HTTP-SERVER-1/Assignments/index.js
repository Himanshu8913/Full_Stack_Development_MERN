
const express = require("express");

const app = express();
const port = 3000;


// 1. Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console

function loggerMiddleware(req, res, next) {
    console.log("Method is " + req.method);
    console.log("URL is " + req.hostname);
    console.log(new Date());
    next();
}

app.get("/logger", loggerMiddleware, function(req, res) {
    res.status(200).json({
        result: "done!"
    })
});

// 2. Create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes it
var reqCount = 0;
function totalRequests(req, res, next) {
    reqCount++;
    next();
}

app.get("/check", totalRequests, function(req, res) {
    res.json({ msg : "done!" })
})

app.get("/admin", function(req, res) {
    res.json({
        totalReqCount : reqCount
    })
})

app.listen(port, () => {
    console.log('Server is running on port: ',port);
})
