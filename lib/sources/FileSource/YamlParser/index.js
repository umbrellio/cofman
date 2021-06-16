const jsYaml = require("js-yaml")

class YamlParser {
  extensions = ["yaml", "yml"]

  parse = data => jsYaml.load(data) || {}
}

module.exports = YamlParser
