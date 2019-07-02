
Cli-Table
=========

A small tool that makes displaying tables in the terminal easy.

## Table of Contents
- [Cli-Table](#Cli-Table)
  - [Table of Contents](#Table-of-Contents)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Advanced Usage](#Advanced-Usage)
  - [Tests](#Tests)
  - [Release History](#Release-History)
  - [License](#License)

## Installation

```console
npm install cli-table --save
```

## Usage

```js
const CliTable = require('cli-table');
```
Requires the module.

```js
const table = new CliTable();
```
Creates a new table.

```js
table.SetTableTitle("Test Table");
```
Sets the title of the table.

```js
table.SetTableColumns([
    {
        key: 'id',
        title: '#',
        width: 10
    },
    {
        key: 'name',
        title: 'Name',
        width: 24
    }
]);
```
Sets table column keys, their shown title and the width of the column.

```js
table.SetTableRows([
    {
        id: 1,
        name: 'John Doe'
    },
    {
        id: 2,
        title: 'Jane Doe'
    }
]);
```
Sets rows for the table.

```js
table.AddTableFooter("Rows: " + table.GetRowAmount());
```
Shows a footer at the bottom of the table, showing the amount of rows in the table.

```js
table.ShowTable();
```
Shows the table.

## Advanced Usage

```js
table.AddTableRow(
    {
        id: 47,
        title: 'James T. Kirk'
    }
);
```
Interactively adds a new row to the table (you should not add a footer to the specified table, as the outcome might look strange.)

## Tests
```console
npm test
```

## Release History
* 0.1.0 Initial Release

## License
Copyright (c) 2019 F. Rick Reich. Licensed under the terms of the MIT license. http://frickreich.mit-license.org/