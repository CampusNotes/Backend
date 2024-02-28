const jwt = require('jsonwebtoken')

const { ACCESS_TOKEN_SECRET_KEY, REFRESH_TOKEN_SECRET_KEY } = require('../Config')


function createAccessToken(payload) {
  return jwt.sign(payload, ACCESS_TOKEN_SECRET_KEY, { expiresIn: '15m' })
}

function createRefreshToken(payload) {
  return jwt.sign(payload, REFRESH_TOKEN_SECRET_KEY, { expiresIn: '7d' })
}


module.exports = {
  createAccessToken,
  createRefreshToken
}
