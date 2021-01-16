const multer = require("multer");
const sha1 = require("js-sha1");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./profile_images"),
  filename: (req, file, cb) => {
    const { size, originalname, mimetype } = file;
    const extension = originalname.match(/\.[a-zA-Z0-9]*$/);
    cb(null, `${sha1(size + originalname + mimetype)}${extension[0]}`);
  },
});
const upload = multer({ storage });

exports.upload = upload;
