const merge = require("deepmerge")

const Config = require("../Config")

class Cofman {
  sources = []

  use = source => this.sources.push(source)

  parse = () => {
    const config = this.sources.reduce((mem, source) => {
      const value = source.parse()

      return merge(mem, value)
    }, {})

    return new Config(config)
  }
}

module.exports = Cofman
