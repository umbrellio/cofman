const YamlParser = require("./index")

test("parses yaml", () => {
  const parser = new YamlParser()
  const result = parser.parse("---\nsome: key\nvalue: 1")

  expect(result).toStrictEqual({ some: "key", value: 1 })
})

test("returns empty object if nothing to parse", () => {
  const parser = new YamlParser()
  const result = parser.parse("")

  expect(result).toStrictEqual({})
})
