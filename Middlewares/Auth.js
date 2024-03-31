const { verifyAccessToken, responseMessage } = require('../Helpers')

async function authorization(req, res, next) {
  const access_token = req.headers['auth_token']
  try {
    const payload = verifyAccessToken(access_token)
    if (payload) {
      next()
    }
  } catch (error) {
    return responseMessage(res, 500, false, "Uauthorized", {})
  }

}

module.exports = authorization