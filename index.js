const express = require("express");
const apiRoutes = require("./routers/index");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

// Routes
app.use("/api", apiRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
