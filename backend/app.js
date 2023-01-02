import express from "express";
import multer from "multer";
import morgan from "morgan";
import cors from "cors";
import fs from "fs";

const PORT = 9898;
const upload = multer({ dest: "./public" });
const app = express();
const path = "./public/data.json";

app.use(cors());
app.use(express.json());
app.use("/public", express.static("./public"), (err) => {
    console.log(err);
});
app.use(morgan("dev"));

app.post("/blogPosts", upload.single("picture"), (req, res) => {
    console.log("lachs gelesen");
    const post = {
        title: req.body.title,
        message: req.body.message,
        author: req.body.author,
        picture: req.file.path,
    };
    fs.readFile(path, (err, data) => {
        if (err) console.log(err);
        const readedData = JSON.parse(data);
        readedData.push(post);
        fs.writeFile(path, JSON.stringify(readedData, null, 2), (err) => {
            if (err) console.log(err);
        });
        res.json(readedData);
    });
});

app.put("/blogPosts", (req, res) => {
    const newData = req.body;
    console.log("et wird jeschrieben");
    fs.writeFile(path, JSON.stringify(newData, null, 2), (err) => {
        if (err) console.log(err);
    });
    res.json(newData);
});


app.get("/blogPosts", (req, res) => {
    fs.readFile(path, (err, data) => {
        if (err) console.log(err);
        const readedData = JSON.parse(data);
        res.json(readedData);
    });
});

app.listen(PORT, () => console.log(`Dieser Server lauscht auf port ${PORT}`));