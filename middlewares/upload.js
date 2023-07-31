import multer from "multer";
import path from "path";

const tempDir = path.resolve("tmp");
// console.log(tempDir)

const multerConfig = multer.diskStorage({
  destination: tempDir,
//   filename: (req, res, cb) => {
//     cb(null, file.originalname);
//   },
});

const upload = multer({
  storage: multerConfig,
});

export default upload;
