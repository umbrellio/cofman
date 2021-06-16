const path = require("path")

const getExtension = filepath => path.extname(filepath).slice(1)

module.exports = {
  getExtension,
}
