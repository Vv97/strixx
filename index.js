const express = require("express");
const cors = require("cors");
const mongoConnect = require("./database/db.database");
const userRouter = require("./Routes/user.routes");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
    res.status(200).send("welcome")
})

app.use("/user", userRouter);







app.listen(process.env.port, () => {
    mongoConnect();
    console.log(`server is running at port ${process.env.port}`)
})

