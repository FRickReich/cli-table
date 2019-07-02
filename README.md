
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
  - [Methods](#Methods)
    - [AddTableFooter()](#AddTableFooter)
    - [AddTableRow(rowContent, rowState)](#AddTableRowrowContent-rowState)
    - [CreateTableBody()](#CreateTableBody)
    - [CreateTableColumn(text, width, first)](#CreateTableColumntext-width-first)
    - [CreateTableFooter(text)](#CreateTableFootertext)
    - [CreateTableHeader()](#CreateTableHeader)
    - [CreateTableRow(rowContent)](#CreateTableRowrowContent)
    - [CreateTableTitle()](#CreateTableTitle)
    - [GetRowAmount()](#GetRowAmount)
    - [HandlePadding(length)](#HandlePaddinglength)
    - [SetTableColor(inputColor)](#SetTableColorinputColor)
    - [SetTableColumns(tableColumns)](#SetTableColumnstableColumns)
    - [SetTableLength(length)](#SetTableLengthlength)
    - [SetTableRows(tableRows)](#SetTableRowstableRows)
    - [SetTableTitle(tableTitle)](#SetTableTitletableTitle)
    - [ShowTable()](#ShowTable)
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

## Methods

### AddTableFooter()
Adds a footer to the table.

---

### AddTableRow(rowContent, rowState)
Adds a row to the table and colorizes it according to its state. Can also be used after creation to interactively add new rows to the table.

**Parameters:**

| Name            | Type    | Description                                                                           |
| --------------- | ------- | ------------------------------------------------------------------------------------- | 
| rowContent      | string  | Content of a single row, derived from input.                                          |
| rowState        | boolean | State of the row information: null (default), "success", "warning" and "danger"       |

---

### CreateTableBody()
Creates the body of the table, including title, header, and body.

---

### CreateTableColumn(text, width, first)
Creates a column, and fills it with text and returns it. Optional, it can also change column appearance for the first column in a line.

**Parameters:**

| Name            | Type    | Description                                                                           |
| --------------- | ------- | ------------------------------------------------------------------------------------- | 
| text            | string  | Text displayed inside of the column.                                                  |
| width           | number  | Width of the column.                                                                  |
| first           | boolean | Is first column in row?                                                               |

**Returns:** string

---

### CreateTableFooter(text)
Creates the footer of the table, including right aligned text with one space padding to the right.

**Parameters:**
| Name            | Type    | Description                                                                           |
| --------------- | ------- | ------------------------------------------------------------------------------------- | 
| text            | string  | Text displayed in footer.                                                             |

**Returns:** string

---

### CreateTableHeader()
Creates the header of the table, including all its columns and returns it.

**Returns:** string

---

### CreateTableRow(rowContent)
Creates a row filled with columns and returns it.

**Parameters:**

| Name            | Type    | Description                                                                           |
| --------------- | ------- | ------------------------------------------------------------------------------------- | 
| rowContent      | string  | Content of a single row, derived from input.                                          |
		
**Returns:** string

---

### CreateTableTitle()
Creates a string containing the title of the table centered and underlined and returns it.

**Returns:** string

---

### GetRowAmount()
Gets the amount of rows used in the table and returns it.

**Returns:** number

---

### HandlePadding(length)
Handles padding to either side of the line text and returns a string filled with spaces.

**Parameters:**

| Name            | Type    | Description                                                                           |
| --------------- | ------- | ------------------------------------------------------------------------------------- | 
| length          | number  | Length of padding.                                                                    |
		
**Returns:** string

---

### SetTableColor(inputColor)
Sets background-color of the Table.

**Parameters:**

| Name            | Type    | Description                                                                           |
| --------------- | ------- | ------------------------------------------------------------------------------------- | 
| inputColor      | string  | Color of the table and/or background.                                                 |

---

### SetTableColumns(tableColumns)
Gets and sets an array-object of the columns used in the table.

**Parameters:**

| Name            | Type    | Description                                                                           |
| --------------- | ------- | ------------------------------------------------------------------------------------- | 
| tableColumns    | object  | List of columns/keys the table will use.                                              |

---

### SetTableLength(length)
Sets the length-in-letters of the Table.

**Parameters:**

| Name            | Type    | Description                                                                           |
| --------------- | ------- | ------------------------------------------------------------------------------------- | 
| length          | number  | Lenghts(width) of the Table.                                                          |

---

### SetTableRows(tableRows)
Gets and Sets an array-object of the rows used in the table.

**Parameters:**

| Name            | Type    | Description                                                                           |
| --------------- | ------- | ------------------------------------------------------------------------------------- | 
| tableRows       | object  | List of rows with data to be used in the table.                                       |

---

### SetTableTitle(tableTitle)
Sets the header-title of the Table.

**Parameters:**

| Name            | Type    | Description                                                                           |
| --------------- | ------- | ------------------------------------------------------------------------------------- | 
| tableTitle      | string  | Title of the table.                                                                   |

---

### ShowTable()
Shows the table, this is used to initialize CreateTableBody().

## Release History
* 0.1.0 Initial Release

## License
asdf.