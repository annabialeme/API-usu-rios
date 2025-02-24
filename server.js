require("dotenv").config();

const express = require("express");
const cors = require("cors");
const userRoutes = require("./src/routes/usersRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use ("/api", userRoutes);

app.get("/", (req, res) => {
    res.send("EUUUU AMOOOO DEMAISSSS BACKEND <3");
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});