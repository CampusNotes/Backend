const Subject = require('../../Models/Subject')

const File=require('../../Models/File')


const RefreshToken = require('../../Models/RefreshToken')
const { responseMessage, comapreHashPassword, createAccessToken, createRefreshToken } = require('../../Helpers')

async function GetFile(req, res) {
  const data = req.body;
  const{branch,semester,subject} = data

  if (!data) {
    return responseMessage(res, 400, false, "invalid credentials", {})
  }

  try {


      
      const file=await File.find({ branch:branch, semester:semester,subject:subject});

      if(file){return responseMessage(res, 200, true, "Get File success", {file})}

      else{
        return responseMessage(res, 400, true, "get File failed", {})
      }

  } catch (error) {
    console.log(error);

    return responseMessage(res, 400, false, "get File failed", {})
  }


}

module.exports = GetFile;