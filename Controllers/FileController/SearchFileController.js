

const File=require('../../Models/File')


const RefreshToken = require('../../Models/RefreshToken')
const { responseMessage, comapreHashPassword, createAccessToken, createRefreshToken } = require('../../Helpers')

async function GetFile(req, res) {
  const data = req.body;
  const{searchletters} = data

  if (!data) {
    return responseMessage(res, 400, false, "invalid credentials", {})
  }

  try {

    const file = await File.find({ name: { $regex: `^${initialLetters}`, $options: 'i' } });
    
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