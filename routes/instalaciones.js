import express from "express";
import fs from "fs";
import csv from "csv-parser";

const router = express.Router();
const filePath = "./instalaciones.csv";

const readData = () => {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on("data", (data) => results.push(data))
            .on("end", () => resolve(results))
            .on("error", (err) => reject(err));
    });
};

router.get("/", async (req, res) => {
    try {
        const data = await readData();
        res.json(data);
    } catch (err) {
        res.status(500).send("Failed to read CSV");
    }
});

export default router;