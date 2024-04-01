const AuthToken = require('../../Models/AuthToken')
const File = require('../../Models/File')
const { responseMessage } = require('../../Helpers')

async function GetAllFilesController(req, res) {
  try {
    const auth_token = req.headers['auth_token'];

    const user = await AuthToken.findOne({ token: auth_token });

    if (!user) {
      throw new Error('Invalid auth token')
    }

    const user_id = user.user_id;

    const files = await File.find({ uploadedBy: user_id })

    if (!files) {
      return responseMessage(res, 200, true, "No files uploaded", { files: [] })
    }
    else {
      return responseMessage(res, 200, true, "Files uploaded", { files: files })
    }
  } catch (error) {
    console.log(error);
    return responseMessage(res, 500, false, "Error uploding file", {})
  }
}

module.exports = GetAllFilesController