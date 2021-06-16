# Cofman

[![Coverage Status](https://coveralls.io/repos/github/umbrellio/cofman/badge.svg?branch=master)](https://coveralls.io/github/umbrellio/cofman?branch=master)
[![Build Status](https://github.com/umbrellio/cofman/actions/workflows/ci.yml/badge.svg)](https://github.com/umbrellio/cofman)

Node.js configuration engine

```js
const { Cofman, FileSource, EnvSource } = require("@umbrellio/cofman")

const instance = new Cofman()

instance.use(new FileSource({ path: "/path/to/file.yml" }))
instance.use(new FileSource({ path: "/path/to/file.json" }))
instance.use(new EnvSource({ prefix: "APP" }))

const config = instance.parse()

config.get("database.url")
```

## Install

```sh
$ yarn add @umbrellio/cofman
```

## Usage

```js
const instance = new Cofman()
```

**Methods**

- `.use(source)` – setup a config source (see [sources](#sources) docs)
- `.parse()` – parse sources and return [`Config`](#config-object) object

### Config object

**Methods**

- `.get(key: string, default: any)` – returns a value by corresponding key or default value

  `key` can be nested by using `.` . For example – `database.password`

- `.asObject()` – returns config as a plain object

## Sources

Cofman supports `EnvSource` and `FileSource` for getting values from env and files correspondingly.

### EnvSource

Get values from env variables. All keys becomes camelCase.

```js
new EnvSource(options)
```

**Options**

- `prefix: string` (optional, default: `""`) – prefix for filtering env vars
  eg. if `prefix: "APP"` cofman will only get vars starts with `APP_` (`APP_DATABASE_URL`, `APP_NAME`, etc.)
- `tryParse: boolean` (optional, default: `true`) – try to parse value as a json
- `nestingDelitemer: string` (optional, default: `__`) – delimeter for getting nesting values
  eg. `SOME__NESTING_VALUE=1` becomes `some: { nestingValue: 1 }`

### FileSource

Reads config from `json` and `yaml` files.

```js
new FileSource(options)
```

**Options**

- `path: string` (required)  – path to config file
- `parser: Parser` (optional, determinites by file extension) – parser to use for this file content

You can use custom file parsers using following interface:

```ts
interface Parser {
  extensions: string[] // supported file extensions

  parse(content: string): Object // takes file content and returns parsed object
}
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/umbrellio/cofman.

## License

Released under MIT License.

## Authors

Created by [Aleksei Bespalov](https://github.com/nulldef).

<a href="https://github.com/umbrellio/">
<img style="float: left;" src="https://umbrellio.github.io/Umbrellio/supported_by_umbrellio.svg" alt="Supported by Umbrellio" width="439" height="72">
</a>
