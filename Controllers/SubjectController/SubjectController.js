const Subject = require('../../Models/Subject')


const RefreshToken = require('../../Models/RefreshToken')
const { responseMessage, comapreHashPassword, createAccessToken, createRefreshToken } = require('../../Helpers')

async function GetSubjects(req, res) {
  const data = req.body;
  const{branch,semester} = data

  if (!data) {
    return responseMessage(res, 400, false, "invalid credentials", {})
  }

  try {


      
      const subs=await Subject.find({ branch:branch, semester:semester});

      if(subs){return responseMessage(res, 200, true, "Get subject success", { subs})}

      else{
        return responseMessage(res, 400, true, "get subject failed", {})
      }

  } catch (error) {
    console.log(error);

    return responseMessage(res, 400, false, "get subject failed", {})
  }


}

module.exports = GetSubjects;