'use strict';

const color = require("cli-color");

const CliTable = require('./CliTable');

const table = new CliTable();
table.SetTableFooterText("Rows");
table.SetTableHeaderColumns(["id", "name", "amount", "test"]);
table.SetTableRows(
[
    {
        id: "1",
        name: 'test',
        amount: "3",
        test: "r"
    },
    {
        id: "abc",
        name: 'test2',
        amount: "5",
        test: "l"
    }
]);
table.Table();