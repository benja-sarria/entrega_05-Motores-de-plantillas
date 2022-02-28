const express = require("express");
const apiRoutes = require("./routers/index");
const { engine } = require("express-handlebars");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 8080;

// Templates Engine
// PUG
app.set("views", "./views/pug");
app.set("view engine", "pug");

app.use(express.static("public"));

// Routes
app.use("/api", apiRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
