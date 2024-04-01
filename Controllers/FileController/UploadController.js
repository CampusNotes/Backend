const File = require('../../Models/File')
const AuthToken = require('../../Models/AuthToken')
const { google } = require('googleapis')
const fs = require('fs')

const drive = require('../../Services/DriveService')
const { responseMessage } = require('../../Helpers')



async function UploadFile(req, res) {
  const { branch, semester, subject, publicationName } = req.body;
  const auth_token = req.headers['auth_token'];
  const file = req.file;
  console.log(file);


  try {

    const user = await AuthToken.findOne({ token: auth_token })

    if (!user) {
      throw new Error('Invalid Token');
    }
    const user_id = user.user_id;

    const auth = new google.auth.GoogleAuth({
      keyFile: './keys.json',
      scopes: ["https://www.googleapis.com/auth/drive"]
    })

    const drive = google.drive({
      version: 'v3',
      auth
    })

    const response = await drive.files.create({
      requestBody: {
        name: file.originalname,
        mimeType: file.mimeType,
        parents: ['1SU_VaxdHIL6RFxzlZYXvEFOiP_irWCDi']
      },
      media: {
        mimeType: file.mimeType,
        body: fs.createReadStream(file.path)
      }
    })

    const uploadedFile = new File({
      name: file.originalname,
      branch,
      semester,
      subject,
      publicationName,
      fileId: response.data.id,
      link: `https://drive.google.com/file/d/${response.data.id}/view`,
      uploadedBy: user_id
    })

    const filesaved = await uploadedFile.save();


    fs.unlink(file.path, (err) => {
      if (err) {
        console.error(err);
      }
    });

    return responseMessage(res, 201, true, "File uploaded successfully", {
      filesaved
    })

  } catch (error) {
    console.log(error);
    fs.unlink(file.path, (err) => {
      if (err) {
        console.error(err);
      }
    });
    return responseMessage(res, 500, false, "Error uploding file", {})
  }
}


module.exports = UploadFile