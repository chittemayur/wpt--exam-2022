

const express = require("express");
const app = express();
// THIS IS HELPING TO READ THE :: "POST REQUEST BODY".
app.use(express.json());

// CROSS ORIGIN REQUEST ENABLING.
const cors = require("cors");
app.use(cors());

const { addUser, selectAllUser } = require("../source/user");

app.get("/users", async (req, res) => {
    const list = await selectAllUser();
    res.json(list);
});

app.post("/addMsg", async (req, res) => {
    const msg = req.body;
    await addUser(msg);
    res.json({ message: "Message Added Successfully" });
});

app.listen(4000, () => console.log("server started"));