const EnvSource = require("./index")

test("it parses env", () => {
  process.env.TEST_TEST = "test"

  const source = new EnvSource()
  const result = source.parse()

  expect(result.testTest).toBe("test")
})

describe("tryParse option", () => {
  test("when false", () => {
    process.env.TEST_TEST = "true"
    const source = new EnvSource({ tryParse: false })
    const result = source.parse()

    expect(result.testTest).toBe("true")
  })

  test("when true", () => {
    process.env.TEST_TEST = "true"
    const source = new EnvSource({ tryParse: true })
    const result = source.parse()

    expect(result.testTest).toBe(true)
  })

  test("when parsing can't be done", () => {
    process.env.TEST_TEST = "{123"

    const source = new EnvSource({ tryParse: true })
    const result = source.parse()

    expect(result.testTest).toBe("{123")
  })
})

test("prefix option", () => {
  process.env.TEST_TEST = "no-prefix"
  process.env.COFMAN_TEST_TEST = "with-prefix"

  const source = new EnvSource({ prefix: "COFMAN" })
  const result = source.parse()

  expect(result).toStrictEqual({ testTest: "with-prefix" })
})

test("nesting", () => {
  process.env.TEST__NESTED = "nested-value"

  const source = new EnvSource({ nestingDelitemer: "__" })
  const result = source.parse()

  expect(result.test).toStrictEqual({ nested: "nested-value" })
  expect(result.test.nested).toBe("nested-value")
})
