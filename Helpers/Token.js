const jwt = require('jsonwebtoken')

const { ACCESS_TOKEN_SECRET_KEY, REFRESH_TOKEN_SECRET_KEY } = require('../Config')


function createAccessToken(payload) {
  return jwt.sign(payload, ACCESS_TOKEN_SECRET_KEY)
}

function createRefreshToken(payload) {
  return jwt.sign(payload, REFRESH_TOKEN_SECRET_KEY)
}

function verifyAccessToken(accessToken) {
  return jwt.verify(accessToken, ACCESS_TOKEN_SECRET_KEY)
}

function verifyRefreshToken(refreshToken) {
  return jwt.verify(refreshToken, REFRESH_TOKEN_SECRET_KEY)
}


module.exports = {
  createAccessToken,
  createRefreshToken,
  verifyAccessToken,
  verifyRefreshToken
}
