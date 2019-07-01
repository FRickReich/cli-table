'use strict';

const color = require("cli-color");

class CliTable
{
    constructor()
    {
        this.tableTitle = 'Default Table';
        this.tableLength = process.stdout.columns;
        this.tableColor = 'white';
        this.tableColumns = [];
        this.tableRows = [];

        this.showingTableRows = [];

        this.lineLength = this.tableLength;
        this.inputLine = '';

        for (let i = 0; i < this.tableLength; i++)
        {
            this.inputLine += " ";
        }
    }

    SetTableTitle(tableTitle)
    {
        this.tableTitle = tableTitle
    }

    SetTableLength(length)
    {
        this.tableLength = length
    }

    SetTableColor(inputColor)
    {
        this.tableColor = inputColor
    }

    SetTableColumns(tableColumns)
    {
        this.tableColumns = tableColumns
    }

    SetTableRows(tableRows)
    {
        this.tableRows = tableRows
    }

    GetRowAmount()
    {
        return this.showingTableRows.length;
    }

    HandlePadding(length)
    {
        let tempString = '';

        for (let i = 0; i < length; i++)
        {
            tempString += ' ';
        }

        return tempString;
    }

    CreateTableColumn(text, width, first)
    {
        const columnSize = width - 2;

        let tempString = `${first ? '' : '|' } ` + text.toString();

        tempString += this.HandlePadding(columnSize - text.toString().length);

        tempString += " ";

        this.lineLength -= tempString.length;

        return tempString;
    }

    CreateTableTitle()
    {
        let titlePadding = Math.round((this.tableLength - this.tableTitle.length) / 2);

        let tempString = `\n${this.HandlePadding(titlePadding)}${this.tableTitle}${this.HandlePadding(titlePadding)}\n`;

        return tempString.substr(0, this.tableLength + 1);
    }

    CreateTableHeader()
    {
        let headerString = '';

        this.tableColumns.forEach((element, i) =>
        {
            headerString += this.CreateTableColumn(
                element.title ||
                element.key,
                element.width ||
                element.title.length ||
                element.key.length,
                i === 0 ? true : false
            );
        });

        const lineLength = this.tableLength - headerString.length;

        if (headerString.length <= this.tableLength)
        {
            headerString += this.HandlePadding(lineLength);
        }

        return headerString.substr(0, this.tableLength);
    }

    CreateTableRow(rowContent)
    {
        this.lineLength = this.tableLength;

        let tempRowString = '';

        this.showingTableRows.push(rowContent);

        for (let column in rowContent)
        {
            this.tableColumns.forEach((element, i) =>
            {
                if (element.key === column)
                {
                    tempRowString += this.CreateTableColumn(rowContent[column], element.width, i == 0 ? true : false);
                }
            });
        }

        tempRowString += this.HandlePadding(this.lineLength)

        return tempRowString;
    }

    CreateTableBody()
    {
        console.log(color[this.tableColor].bold.underline(this.CreateTableTitle()));

        console.log('\n' + color[this.tableColor].inverse.bold(this.CreateTableHeader()));

        this.tableRows.forEach(element =>
        {
            this.AddTableRow(element);
        });
    }

    CreateTableFooter(text)
    {
        let footerString = "";
        let footerStringLength = text.length;

        for (let i = 0; i < (this.tableLength - footerStringLength) - 1; i++)
        {
            footerString += ' ';
        }

        footerString += text + ' ';

        return footerString.substr(0, this.tableLength);
    }

    AddTableRow(rowContent, rowState = null)
    {
        if (rowState === null)
        {
            console.log(color[this.tableColor](this.CreateTableRow(rowContent)));    
        }
        else if(rowState === 'success')
        {
            console.log(color[this.tableColor]['bgGreen'](this.CreateTableRow(rowContent)));    
        }
        else if (rowState === 'warning')
        {
            console.log(color[this.tableColor]['bgYellow'](this.CreateTableRow(rowContent)));    
        }
        else if (rowState === 'danger')
        {
            console.log(color[this.tableColor]['bgRed'](this.CreateTableRow(rowContent)));    
        }
    }

    AddTableFooter(text)
    {
        console.log(color.bold.bgWhite.black(this.CreateTableFooter(text)) + '\n');
    }

    ShowTable()
    {
        this.CreateTableBody();
    }
}

module.exports = CliTable;
