const jsYaml = require("js-yaml")

class YamlParser {
  extensions = ["yaml", "yml"]

  parse(data) {
    return jsYaml.load(data) || {}
  }
}

module.exports = YamlParser
