
const should = require('chai').should();
const TableTops = require('../index');

const table = new TableTops();

// SetTableTitle
table.SetTableTitle("Testing Table");

// SetTableColor
table.SetTableColor("white");

// SetTableLength
table.SetTableLength(40);

// SetTableColumns
table.SetTableColumns([
    {
        key: 'id',
        title: '#',
        width: 10
    },
    {
        key: 'name',
        title: 'Name',
        width: 25
    }
]);

// SetTableRows
table.SetTableRows([
    {
        id: 1,
        name: 'Thingy 1',
    },
    {
        id: 2,
        name: 'Thingy 2',
    },
    {
        id: 3,
        name: 'Thingy 3',
    }
]);

//HandlePadding
describe('- HandlePadding', function ()
{
    it('creates a string filled with whitespace to create a padding.', function() {
        table.HandlePadding(5).should.equal('     ');
    });
});

// CreateTableRow
describe('- CreateTableColumn', function ()
{
    it('creates a column at the start of a row with a specified length.', function() {
        table.CreateTableColumn("test", 20, true).should.equal(' test               ');
    });

    it('creates a column inside of a row with the width a specified length.', function() {
        table.CreateTableColumn("test", 10, false).should.equal('| test     ');
    });
});

//CreateTableTitle
describe('- CreateTableTitle', function ()
{
    it('creates title header of the table.', function() {
        table.CreateTableTitle().should.equal('\n              Testing Table             ');
    });
});

//CreateTableHeader
describe('- CreateTableHeader', function ()
{
    it('creates header row of the table, after building its columns.', function ()
    {
        table.CreateTableHeader().should.equal(' #        | Name                        ');
    });
});

//CreateTableRow
describe('- CreateTableRow', function ()
{
    it('creates a row for the table.', function ()
    {
        table.CreateTableRow({id: 1, name: "test"}).should.equal(' 1        | test                        ');
    });
});

//GetRowAmount
describe('- GetRowAmount', function ()
{
    it('gets the amount of rows in the table.', function() {
        table.GetRowAmount().should.equal(1);
    });
});

//CreateTableBody
describe('- CreateTableBody', function ()
{
    //it('creates the full table layout.', function() {
    //    table.CreateTableBody().should.equal();
    //});
});

//CreateTableFooter
describe('- CreateTableFooter', function ()
{
    it('creates the table footer.', function() {
        table.CreateTableFooter('Rows: ' + table.GetRowAmount()).should.equal('                                Rows: 1 ');
    });
});

//AddTableFooter
describe('- AddTableFooter', function ()
{
    //it('Adds a footer to the table.', function() {
    //    table.AddTableFooter().should.equal(true);
    //});
});

//ShowTable
describe('- ShowTable', function ()
{
    //it('Shows the table in the terminal.', function() {
    //    table.ShowTable().should.equal(true);
    //});
});
