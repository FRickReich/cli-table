'use strict';

const color = require("cli-color");

const CliTable = require('./CliTable');

const table = new CliTable();

table.SetTableTitle("Test Table");
table.SetTableLength(80);
table.SetTableColumns([
    {
        key: 'id',
        title: '#',
        width: 10
    },
    {
        key: 'title',
        title: 'Title',
        width: 24
    },
    {
        key: 'version',
        title: 'Version',
        width: 9
    },
    {
        key: 'author',
        title: 'Author',
        width: 10
    }
]);
table.SetTableRows([
    {
        id: 1,
        title: 'Thingy 1',
        version: '0.1.0',
        author: 'F. Rick Reich'
    },
    {
        id: 2,
        title: 'Thingy 2',
        version: '0.1.0',
        author: 'F. Rick Reich'
    },
    {
        id: 3,
        title: 'Thinfy 3',
        version: '0.1.0',
        author: 'F. Rick Reich'
    }
]);

table.ShowTable();

(function theLoop(i)
{
    setTimeout(function ()
    {
        table.AddTableRow(
            {
                id:  table.GetRowAmount() + 1,
                title: `${Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}`,
                version: `0.${Math.floor((Math.random() * 10) + 1)}.0`,
                author: 'F. Rick Reich'
            }
        );

        if (--i)
        {
            theLoop(i);
        }
    }, 3000);
})(10);
  
//table.CreateTableFooter("Rows: " + table.GetRowAmount());
