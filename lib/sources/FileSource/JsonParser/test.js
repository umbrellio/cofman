const JsonParser = require("./index")

test("parses json", () => {
  const parser = new JsonParser()
  const result = parser.parse('{"some": "key", "value": 1}')

  expect(result).toStrictEqual({ some: "key", value: 1 })
})
