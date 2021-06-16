const Cofman = require("./index")

const mockedSource = {
  parse: () => ({ parsed: "value" })
}

test("returns a config", () => {
  const instance = new Cofman()
  instance.use(mockedSource)
  const config = instance.parse()

  expect(config.get("parsed")).toBe("value")
})
