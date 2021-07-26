import express from "express";
import morgan from "morgan";
import * as DB from "./db.js";

const app = express();
app.use(morgan("combined"));
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    const r = await DB.usersGet();
    res.json(r);
});

app.post("/new", async (req, res) => {
    if (!req.body.user) return res.status(400).send("400: Please specify a user name");
    const { user } = req.body;
    const result = await DB.usersNew(user);
    res.json(result);
});

app.use((req, res) => {
    res.status(404).send("404: File not found");
});

app.use((error, req, res, next) => {
    res.status(500).send("500: Internal server error");
})

app.listen(3000, () => console.log(`Server started on port: 3000`));
