const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Sirve toda la carpeta 'public' como archivos estáticos
app.use(express.static(path.join(__dirname, "/public")));

// La ruta principal
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});