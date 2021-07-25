import express from "express";
import morgan from "morgan";

const app = express();
app.use(morgan("combined"));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use((req, res) => {
    res.status(404).send("404: File not found");
});

app.use((error, req, res, next) => {
    res.status(500).send("500: Internal server error");
})

app.listen(3000, () => console.log(`Server started on port: 3000`));
