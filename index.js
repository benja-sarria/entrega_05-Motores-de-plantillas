const express = require("express");
const apiRoutes = require("./routers/index");
const { engine } = require("express-handlebars");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 8080;

// Templates Engine
// HANDLEBARS
/* app.engine(
    "hbs",
    engine({
        // la extensión de los archivos
        extname: "hbs",
        defaultLayout: "main.hbs",
        // indicamos un path absoluto donde estan nuestros layouts y vistas principales
        layoutsDir: path.resolve(__dirname, "./views/layouts"),
        // path a nuestras vistas secundarias
        partialsDir: path.resolve(__dirname, "./views/partials"),
    })
);
app.set("views", "./views");
app.set("views engine", "hbs"); */

// PUG
/* app.set("views", "./views/pug");
app.set("view engine", "pug"); */

// EJS
app.set("views", "./views/ejs");
app.set("view engine", "ejs");

app.use(express.static("public"));

// Routes
app.use("/api", apiRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
