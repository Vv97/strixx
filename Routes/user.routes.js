const { Router } = require("express");
const userModel = require("../model/user.model");
const userRouter = Router();
const bcyrpt = require("bcrypt");


userRouter.get("/", async (req, res) => {
    res.status(200).send({ message: "welcome to user page" })
    await userModel.find();
})


userRouter.post("/", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        bcyrpt.hash(password, 5, async (err, hash) => {
            if (hash) {
                let userData = userModel({
                    name,
                    email,
                    password: hash
                });
                await userData.save();
                res.status(200).send({ message: "register" })
            } else res.status(400).send({ message: err.message })
        })

    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

module.exports = userRouter