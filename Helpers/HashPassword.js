const bcrypt = require('bcrypt')
const { SALT } = require('../Config')

async function hashPassword(password) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    return hashedPassword
  } catch (error) {
    console.log('Error  hashing password: ', error);
  }
}

async function comapreHashPassword(password, hash) {
  try {
    const match = await bcrypt.compare(password, hash)
    return match
  } catch (error) {
    console.log('Error  hashing password: ', error);
  }
}

module.exports = {
  hashPassword,
  comapreHashPassword
}