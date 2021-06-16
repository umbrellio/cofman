const { get } = require("lodash")

class Config {
  constructor(config) {
    this.config = config
  }

  get(key, defaultValue) {
    return get(this.config, key, defaultValue)
  }

  asObject() {
    return this.config
  }
}

module.exports = Config
