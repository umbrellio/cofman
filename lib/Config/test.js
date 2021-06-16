const Config = require("./index")

test("tests config object", () => {
  const config = new Config({ a: 1, b: { c: 2 } })

  expect(config.get("a")).toBe(1)
  expect(config.get("b")).toStrictEqual({ c: 2 })
  expect(config.get("b.c")).toBe(2)
  expect(config.get("b.d", "default")).toBe("default")
  expect(config.asObject()).toStrictEqual({ a: 1, b: { c: 2 } })
})
