const express = require("express");
const apiRoutes = require("./routers/index");
const { engine } = require("express-handlebars");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 8080;

// Templates Engine
// EJS
app.set("views", "./views/ejs");
app.set("view engine", "ejs");

app.use(express.static("public"));

// Routes
app.use("/api", apiRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
