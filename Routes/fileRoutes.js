const multer = require('multer')
const express = require('express')
const router = express.Router()
const { UploadFileController } = require('../Controllers/FileController')


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})

const upload = multer({ storage: storage })

router.post('/upload', upload.single('file'), UploadFileController)


module.exports = router;
