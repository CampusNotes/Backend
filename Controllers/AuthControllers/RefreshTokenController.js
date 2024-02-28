const { verifyRefreshToken, responseMessage, createAccessToken, createRefreshToken } = require('../../Helpers')
const RefreshToken = require('../../Models/RefreshToken')

async function RefreshTokens(req, res) {
  const refresh_token = req.headers['refresh_token']
  try {
    if (verifyRefreshToken(refresh_token)) {
      const payload = verifyRefreshToken(refresh_token)
      const user_id = payload.id

      const newAccessToken = createAccessToken({ id: user_id })
      const newRefreshToken = createRefreshToken({ id: user_id })

      const user = await RefreshToken.findOneAndUpdate({ user_id }, { token: newRefreshToken }, { new: true })
      return responseMessage(res, 200, true, "refreshed tokens", { user_id, access_token: newAccessToken, refresh_token: newRefreshToken })
    }

  } catch (error) {
    return responseMessage(res, 400, false, "Unable to refresh token", {})
  }

}

module.exports = RefreshTokens