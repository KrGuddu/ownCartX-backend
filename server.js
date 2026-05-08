// // import app from "./app.js";
// import app from "./app.js";
// import { v2 as cloudinary } from "cloudinary";

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
//   api_key: process.env.CLOUDINARY_CLIENT_API,
//   api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
// });

// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on port ${process.env.PORT}`);
// });


import app from "./app.js";
import dotenv from "dotenv";
import database from "./database/db.js";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

// DB connect FIRST
database.connect()
  .then(() => console.log("DB Connected"))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
