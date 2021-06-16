class ObjectSource {
  constructor(object) {
    this.object = object
  }

  parse = () => this.object
}

module.exports = ObjectSource
