import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

// Route for blog1
app.get("/blog1", (req, res) => {
    res.render("blog1"); // Render blog1.ejs
});

// Route for blog2
app.get("/blog2", (req, res) => {
    res.render("blog2"); // Render blog2.ejs
});

app.post("", (req, res) => {
    res.render("index.ejs");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});