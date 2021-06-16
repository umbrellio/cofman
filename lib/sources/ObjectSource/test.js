const ObjectSource = require("./index")

test("it parses json file", () => {
  const source = new ObjectSource({ custom: "value" })
  const result = source.parse()

  expect(result).toStrictEqual({ custom: "value" })
})
