require('dotenv').config()

const AppConfig = {
  defaultPort : process.env.PORT || 5000
}

module.exports = {
  AppConfig
}