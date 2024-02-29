
const RefreshToken = require('../../Models/RefreshToken')
const { responseMessage, verifyRefreshToken } = require('../../Helpers')

async function LogoutUser(req, res) {
  const refresh_token = req.headers['refresh_token'];

//   if (!refresh_token) {
//     return responseMessage(res, 400, false, "invalid credentials", {})
//   }

  try {
    
    const refreshtoken= verifyRefreshToken(refresh_token);

    const userid=refreshtoken.id;

    const response = await RefreshToken.deleteOne({user_id:userid});

   if(response){
    return responseMessage(res, 200, true, "Logout Successful", {})
   }

  } catch (error) {
    console.log(error);

    return responseMessage(res, 400, false, "Logout failed", {})
  }


}

module.exports = LogoutUser;