'use strict';

const color = require("cli-color");

class CliTable
{
    constructor()
    {
        this.tableTitle = "Default Table";
        this.tableLength = process.stdout.columns;
        this.tableColor = "white";
        this.tableFooterText = "Rows";
        this.tableColumns = [];
        this.tableRows = [];

        this.showingTableRows = [];

        this.inputLine = "";
            
        for (let i = 0; i < this.tableLength; i++)
        {
            this.inputLine += " ";
        }
    }

    SetTableTitle(tableTitle) { this.tableTitle = tableTitle };
    SetTableLength(length) { this.tableLength = length };
    SetTableColor(inputColor) { this.tableColor = inputColor };
    SetTableColumns(tableColumns) { this.tableColumns = tableColumns }
    SetTableRows(tableRows) { this.tableRows = tableRows };

    GetRowAmount()
    {
        return this.showingTableRows.length;
    }

    HandlePadding(length)
    {
        let tempString = "";

        for (let i = 0; i < length; i++)
        {
            tempString += " ";
        }

        return tempString;
    }

    CreateTableColumn(text, width, first)
    {
        const columnSize = width - 2;

        let tempString = `${first ? "" : "|" } ` + text.toString();
        
        tempString += this.HandlePadding(columnSize - text.toString().length);

        tempString += " ";
        
        return tempString;
    }

    CreateTableTitle()
    {
        let titlePadding = Math.round((this.tableLength - this.tableTitle.length) / 2);
        
        let tempString = `\n${this.HandlePadding(titlePadding)}${this.tableTitle}${this.HandlePadding(titlePadding)}\n`;

        console.log(color[this.tableColor].bold.underline(tempString.substr(0, this.tableLength + 1)));
    }

    CreateTableHeader()
    {
        let headerString = '';

        this.tableColumns.forEach((element, i) =>
        {
            headerString += this.CreateTableColumn(element.title || element.key, element.width || element.title.length || element.key.length, i === 0 ? true : false);
        });

        const lineLength = this.tableLength - headerString.length

        if (headerString.length <= this.tableLength)
        {
            headerString += this.HandlePadding(lineLength);
        }

        console.log("\n" + color[this.tableColor].inverse.bold(headerString.substr(0, this.tableLength)));
    }

    CreateTableRow(rowContent)
    {
        let tempRowString = "";

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
        
        console.log(tempRowString);
    }

    CreateTableBody()
    {
        this.CreateTableTitle();
        this.CreateTableHeader();

        this.tableRows.forEach(element => {
            this.CreateTableRow(element);
        });
    }

    CreateTableFooter(text)
    {
        
        let footerString = "";
        let footerStringLength = text.length;

        for (let i = 0; i < (this.tableLength - footerStringLength) - 1; i++) {
            footerString += " ";
        }

        footerString += text + " ";

        console.log(color.bold.bgWhite.black(footerString.substr(0, this.tableLength)) + "\n");
    }

    AddTableRow(rowContent)
    {
        this.CreateTableRow(rowContent);
    }

    ShowTable()
    {
        this.CreateTableBody();
    }
}

module.exports = CliTable;