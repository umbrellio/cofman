const path = require("path")

const FileSource = require("./index")

test("it parses json file", () => {
  const source = new FileSource({ path: path.resolve(__dirname, "__mocks__/test.json") })
  const result = source.parse()

  expect(result).toStrictEqual({ some: "value", number: 1 })
})

test("it parses yaml file", () => {
  const source = new FileSource({ path: path.resolve(__dirname, "__mocks__/test.yml") })
  const result = source.parse()

  expect(result).toStrictEqual({ some: "value", number: 1 })
})

test("throws an error for unknown file type", () => {
  expect(() => new FileSource({ path: "some/path.test" }))
    .toThrow(/Cannot determine parser for file/)
})

describe("failMissing option", () => {
  test("when true", () => {
    const source = new FileSource({ path: "some/path.json", failMissing: true })

    expect(source.parse).toThrow(/doesn't exist/)
  })

  test("when false", () => {
    const source = new FileSource({ path: "some/path.json", failMissing: false })

    expect(source.parse()).toStrictEqual({})
  })
})
