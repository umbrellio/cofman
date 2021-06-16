class JsonParser {
  extensions = ["json"]

  parse(data) {
    return JSON.parse(data)
  }
}

module.exports = JsonParser
