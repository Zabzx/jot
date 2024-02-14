require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.ATLAS_URL;
const cors = require("cors")
const app = express();
const { auth } = require("./middleware/auth")

const noteRouter = require("./routes/notesRoutes");
const todoRouter = require("./routes/todosRoutes");
const userRouter = require("./routes/userRoutes");

const {protectRoutes} = require("./middleware/auth")

mongoose.connect(mongoString);
const db = mongoose.connection;

db.on("error", (err) => {
    console.log(err);
});

db.once("connected", () => {
    console.log("Database connected");
});

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/notes", noteRouter);
app.use("/api/todos", todoRouter);
app.use("/api/user", userRouter);

app.get("/protect", protectRoutes)

app.get("/test", (req, res) => {
    res.send("worked")
})

// Image uploading
const multer = require("multer");
const { Grid } = require("gridfs-stream");
const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post("/testimageupload", auth, upload.single("file"), async (req, res) => {
  try {
    const gfs = new Grid(mongoose.connection.db, mongoose.mongo);
    const writeStream = gfs.createWriteStream({
      filename: req.file.originalname,
      mode: "w",
      content_type: req.file.mimetype,
    });
    fs.createReadStream(req.file.path).pipe(writeStream);
    writeStream.on("close", (file) => {
      fs.unlink(req.file.path, (err) => {
        if (err) throw err;
        return res.json({ file });
      });
    });
  } catch (error) {
    return res.status(400).json({ message: "Error uploading file", error: error })
  }
})

app.listen(5000, () => {
    console.log("Server listening on port 5000");
});
