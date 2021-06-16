class JsonParser {
  extensions = ["json"]

  parse = data => JSON.parse(data)
}

module.exports = JsonParser
