// Schema from yt tutorial https://github.com/the-debug-arena/multer-image-upload/blob/main/backend/imageDetails.js

const mongoose = require("mongoose");

const ImageDetailsScehma = new mongoose.Schema(
  {
   image:String
  },
  {
    collection: "ImageDetails",
  }
);

mongoose.model("ImageDetails", ImageDetailsScehma);
