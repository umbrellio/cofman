const { get } = require("lodash")

class Config {
  constructor(config) {
    this.config = config
  }

  get = (key, defaultValue) => get(this.config, key, defaultValue)

  asObject = () => this.config
}

module.exports = Config
