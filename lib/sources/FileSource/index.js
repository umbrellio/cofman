const fs = require("fs")

const JsonParser = require("./JsonParser")
const YamlParser = require("./YamlParser")

const { getExtension } = require("./utils")

const PARSERS = [
  new JsonParser(),
  new YamlParser(),
]

const determineParser = path => {
  const ext = getExtension(path)
  const parser = PARSERS.find(p => p.extensions.includes(ext))

  if (!parser) throw new Error(`Cannot determine parser for file '${path}'`)

  return parser
}

class FileSource {
  constructor({ path, parser, failMissing = false }) {
    this.path = path
    this.parser = parser || determineParser(path)
    this.failMissing = failMissing
  }

  parse = () => {
    if (!fs.existsSync(this.path)) {
      if (this.failMissing) {
        throw new Error(`File '${this.path} doesn't exist`)
      } else {
        return {}
      }
    }

    const content = fs.readFileSync(this.path).toString()

    return this.parser.parse(content)
  }
}

module.exports = FileSource
