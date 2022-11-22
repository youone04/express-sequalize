import multer from "multer";
import path from "path";
const __dirname = path.resolve();

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(__dirname, "public/uploads"));
          },
          fileFilter: (req, file, cb) => {
            let ext = path.extname(file.originalname);
              if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
              cb(new Error("File type is not supported"), false);
              return;
            }
            
            cb(null, true);
          },
          filename: function (req, file, cb) {
              cb(
                null,
                file.fieldname + "-" + Date.now() + path.extname(file.originalname)
              );
            },
    })    
  
  })

export default upload;