import express from "express";
import fs from "fs";

const router = express.Router();
const filePath = "./consumoPorComarca.json";

const readData = () => {
    try {
        const raw = fs.readFileSync(filePath);
        return JSON.parse(`[${raw.toString().replace(/}\s*{/g, '},{')}]`);
    } catch (error) {
        console.error(error);
        return [];
    }
};

router.get("/", (req, res) => {
    const data = readData();
    res.json(data);
});

router.get("/:index", (req, res) => {
    const data = readData();
    const index = parseInt(req.params.index);
    if (isNaN(index) || index < 0 || index >= data.length) {
        return res.status(404).send("Not found");
    }
    res.json(data[index]);
});

export default router;