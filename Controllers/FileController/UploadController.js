const File = require('../../Models/File')
const { google } = require('googleapis')
const fs = require('fs')

const { responseMessage } = require('../../Helpers')



async function UploadFile(req, res) {
  const { name, branch, semester, subject, publicationName, } = req.body;
  const file = req.file;
  console.log(file);
  const user_id = req.user_id;

  try {

    const auth = new google.auth.GoogleAuth({
      keyFile: __dirname + '/keys.json',
      scopes: ['https://www.googleapis.com/auth/drive']
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
      link: `https://drive.google.com/file/d/${response.data.id}/view`,
      uploadedBy: user_id

    })

    await uploadedFile.save();

    fs.unlink(file.path, (err) => {
      if (err) {
        console.error(err);
      }
    });

    return responseMessage(res, 201, true, "File uploaded successfully", {

    })

  } catch (error) {
    console.log(error);
    return responseMessage(res, 500, false, "Error uploding file", {})
  }
}


module.exports = UploadFile