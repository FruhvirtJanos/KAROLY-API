const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

// Make the images folder accessible
app.use("/images", express.static(path.join(__dirname, "images")));

app.get("/api/random", (req, res) => {

    const imageFolder = path.join(__dirname, "images");

    // Get all files in the images folder
    const images = fs.readdirSync(imageFolder);

    // Pick a random image
    const randomImage = images[Math.floor(Math.random() * images.length)];

    // Send JSON response
    res.json({
        image: `https://karoly-api.onrender.com/images/${randomImage}`
    });
});

app.listen(PORT, () => {
    console.log(`API running at http://localhost:${PORT}`);
});