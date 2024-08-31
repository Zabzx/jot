require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.ATLAS_URL;
const cors = require("cors")
const app = express();
const { auth } = require("./middleware/auth.js");

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

app.get("/test", (_, res) => {
    res.send("worked")
})

// Importing Image schema
require("./models/imageModel.js")
const Images = mongoose.model("ImageDetails")

// Image uploading
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (_, _, cb) {
    const uploadPath = path.join(__dirname, "../uploads");
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: function (_, file, cb) {
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

app.post("/upload-image", auth, upload.single("image"), async (req, res) => {
  const imageName = req.file.filename;
  try {
    const userImages = await Images.find({ userId: req.user.id });
    if (userImages.length < 1) {
      await Images.create({ image: imageName, userId: req.user.id });
      res.json({ result: "image uploaded", me: true });
    } else {
      const updatedImage = await Images.findByIdAndUpdate(userImages[0]._id, { image: imageName }, { new: true });
      res.json({ result: updatedImage, me: true });
    }
  } catch (error) {
    res.json({ status: error.message });
  }
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});


app.get("/get-image", auth, async (req, res) => {
  try {
    // Images.find({}).then(data => {
    // res.send({ status: "ok", data: data})
    // })
    Images.find({ userId: req.user.id}).then(data => {
      res.send({ status: "ok", data: data})
    })
  } catch (error) {
    res.send(error)
  }
})
