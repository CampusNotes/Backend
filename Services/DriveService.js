const path = require('path')
const process = require('process')
const { google } = require('googleapis')

let filePath = path.join(process.cwd(), 'keys.json')
const auth = new google.auth.GoogleAuth({
  keyFile: filePath,
  scopes: ["https://www.googleapis.com/auth/drive"]
})

const drive = google.drive({
  version: 'v3',
  auth
})

module.exports = drive;