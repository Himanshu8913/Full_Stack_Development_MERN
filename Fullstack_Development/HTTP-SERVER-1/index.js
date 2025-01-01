const express = require("express");

const app = express();
const port = 3000;

// 1. http://localhost:3000/multiply?a=1&b=2
// 2. http://localhost:3000/add?a=1&b=2
// 3. http://localhost:3000/divide?a=1&b=2
// 4. http://localhost:3000/subtract?a=1&b=2
// 5. http://localhost:3000/subtract/10/20

app.get('/', (req, res) => {
    res.send('Hello World!!')
});

app.get("/sum", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.status(200).json({
        result: a + b
    })
});

app.get("/multiply", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.status(200).json({
        result: a * b
    })
});

app.get("/divide", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.status(200).json({
        result: a / b
    })
});

app.get("/subtract", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.status(200).json({
        result: a - b
    })
});

app.get("/subtract/:a/:b", function(req, res) {
    const a = req.params.a;
    const b = req.params.b;
    res.status(200).json({
        result: a - b
    })
});

app.listen(port, () => {
    console.log('Server is running on port: ',port);
})
