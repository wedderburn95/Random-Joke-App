import express from "express";
import fetch from "node-fetch";
import cors  from "cors";

const app = express();
app.use(cors());
const PORT = 4000;

app.get("/api/joke", async (req, res) => {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any")
    const data = await response.json();
    res.json(data);
})

app.listen(PORT, () =>  console.log(`Server running on port ${PORT}`));