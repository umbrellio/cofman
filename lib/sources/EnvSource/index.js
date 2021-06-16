const { set, trim, camelCase } = require("lodash")

class EnvSource {
  constructor({ prefix = "", tryParse = true, nestingDelitemer = "__" } = {}) {
    this.prefix = prefix
    this.tryParse = tryParse
    this.nestingDelitemer = nestingDelitemer
  }

  parse = () => Object.entries(process.env).reduce((mem, item) => {
    const [originalKey, originalValue] = item

    if (!this.prefixRegex.test(originalKey)) return mem

    const keyPath = this.makeKeyPath(originalKey)
    const value = this.makeValue(originalValue)

    return set(mem, keyPath, value)
  }, {})

  makeKeyPath = key => key.replace(this.prefixRegex, "")
    .split(this.nestingDelitemer)
    .map(trim)
    .map(camelCase)

  get prefixRegex() {
    if (this.prefix) return new RegExp(`^${this.prefix}_+`)

    return new RegExp("")
  }

  makeValue = value => {
    if (this.tryParse) {
      try {
        return JSON.parse(value)
      }
      catch (_) {
        return value
      }
    }

    return value
  }
}

module.exports = EnvSource
