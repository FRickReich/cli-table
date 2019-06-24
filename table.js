'use strict';

const color = require("cli-color");

//const CliTable = require('./CliTable');

//const table = new CliTable();

//table.SetHeader(["id", "name", "amount"]);

//table.ShowTable();

const tableLength = process.stdout.columns;
let line = "";

const headerColumns = ["id", "name", "amount"];
const bodyRows = [
    {
        id: "ss",
        name: 'test',
        amount: 3
    },
    {
        id: "5",
        name: 'test2',
        amount: 5
    }
];

const tableColumnSize = tableLength / headerColumns.length;

let headerText = "";

headerColumns.forEach(column =>
{
    for (let i = 0; i < tableColumnSize; i++)
    {
        if (i === 0)
        {
            headerText += "|";
        }
        else if (i === 1)
        {
            headerText += " ";
        }
        else
        {
            if (column[i - 2] === undefined)
            {
                headerText += " ";
            }
            else
            {
                headerText += column[i - 2];
            }
        }
    }
});

headerText += "|";

let bodyText = "";

bodyRows.forEach(row =>
{
    bodyText += "| s";

    bodyText += "\n";
});

console.log(color["bgWhite"]["black"](headerText));
console.log(color["white"](bodyText));

