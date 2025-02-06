const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");
const app = express();

const PORT = 3000;

// mongoose.connect("mongodb+srv://:@c/todo-app-database")

app.use(express.json());

app.post("/signup", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        email: email,
        password: password,
        name: name
    })
    res.json({
        message: "Signup successful!"
    })
});

app.post("/signin", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password
    })

    if(user) {
        const token = await jwt.sign({
            id: user._id.toString()
        }, JWT_SECRET)
        res.json({
            token
        });
    } else {
        res.status(403).json({
            message: "Wrong Credentials"
        })
    }
});

app.post("/todo", auth, async (req, res) => {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        title: title,
        userId: userId,
        done: done
    })
    res.json({
        message: "Todo successfully created!",
    })
});

app.get("/todos", auth, async (req, res) => {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId: userId
    })
    res.json({
        todos
    })
});

app.listen(PORT);