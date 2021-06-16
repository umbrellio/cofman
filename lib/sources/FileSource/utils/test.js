const { getExtension } = require("./index")

test("getExtension", () => {
  const path = "/path/to/file.yml"

  expect(getExtension(path)).toBe("yml")
})
