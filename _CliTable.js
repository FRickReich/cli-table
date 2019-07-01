'use strict';

const color = require("cli-color");

class CliTable
{
    constructor(tableTitle = "Default Table", tableColor = "white", tableLength = process.stdout.columns)
    {
        this.tableTitle = tableTitle;
        this.tableLength = tableLength;
        this.tableColumnWidth = {  };
        this.tableColor = tableColor;
        this.tableHeaderColumns = [  ];
        this.tableRows = [  ];
        this.tableFooterText = "Rows";

        this.showTableTitle = true;

        this.inputLine = this.SetLineSize(tableLength);
    }

    /**
     * The following functions set up table content.
     */
    SetTableTitle(title) { this.tableTitle = title }
    SetTableLength(length) { this.tableLength = length }
    SetTableColumnWidth(widthArray) { this.tableColumnWidth = widthArray };
    SetTableHeaderColumns(headerColumns) { this.tableHeaderColumns = headerColumns }
    SetTableColor(inputColor) { this.tableColor = inputColor }
    SetTableFooterText(tableFooter) { this.tableFooterText = tableFooter }

    SetTableRows(tableRows) { this.tableRows = tableRows };
    
    /**
     * Sets up line width for table length.
     * 
     * @param {number} width 
     */
    SetLineSize(width)
    {
        let tempString = "";
        
        for (let i = 0; i < this.tableLength; i++)
        {
            tempString += " ";
        }

        return tempString;
    }

    /**
     * 
     */
    SetTableColor()
    {

    }

    /**
     * Sets the padding for strings in table.
     * 
     * @param {number} length 
     */
    HandlePadding(length)
    {
        let tempString = "";

        for (let i = 0; i < length; i++) {
            tempString += " ";
        }

        return tempString;
    }

    /**
     * Creates the table title.
     * 
     * @param {string} title 
     */
    CreateTableTitle(title)
    {
        let titlePadding = Math.round((this.tableLength - title.length) / 2);
        
        let tempString = `\n${this.HandlePadding(titlePadding)}${this.tableTitle}${this.HandlePadding(titlePadding)}\n`;

        console.log(color.bold.underline(tempString.substr(0, this.tableLength + 1)));
    }

    /**
     * Creates the table header and sets up its columns.
     * 
     * @param {object} headerColumns 
     */
    CreateTableHeader(headerColumns)
    {
        let headerString = '';

        for (let i = 0; i < headerColumns.length; i++)
        {
            headerString += this.CreateTableColumn(headerColumns[i], i === 0 ? true : false);
        }

        console.log("\n" + color.bold.bgWhite.black(headerString.substr(0, this.tableLength)));
    }

    /**
     * Creates a table column for header and/or body.
     * 
     * @param {string} columnInput 
     * @param {bool} first 
     */
    CreateTableColumn(columnInput, first = false)
    {
        const columnSize = Math.round(this.tableLength / this.tableHeaderColumns.length);

        let tempString = `${first ? "" : "|" } ` + columnInput.toString();

        for (let i = 0; i < columnSize - columnInput.length; i++) {
            tempString += " ";
        }

        return tempString;
    }

    /**
     * Creates the table body.
     */
    CreateTableBody()
    {
        let tableBodyString = "";

        this.tableRows.forEach(row => {
            tableBodyString +=  this.CreateTableRow(row).substr(0, this.tableLength);
        });

        console.log(tableBodyString);
    }

    /**
     * Creates a table row.
     * 
     * @param {object} rowContent 
     */
    CreateTableRow(rowContent)
    {
        let rowString = "";
        let isFirst = true;

        for (let column in rowContent)
        {
            if (isFirst)
            {
                rowString += this.CreateTableColumn(rowContent[column], true);
                isFirst = false;
            }
            else
            {
                rowString += this.CreateTableColumn(rowContent[column], false);
            }
        }

        return rowString;
    }

    /**
     * Creates the table footer.
     */
    CreateTableFooter()
    {
        let rowInfo = `${this.tableFooterText}: ${ this.tableRows.length }`;
        
        let footerString = "";
        let footerStringLength = rowInfo.length;

        for (let i = 0; i < (this.tableLength - footerStringLength) - 1; i++) {
            footerString += " ";
        }

        footerString += rowInfo + " ";

        console.log(color.bold.bgWhite.black(footerString.substr(0, this.tableLength)) + "\n");
    }

    /**
     * Creates and shows the finished table.
     */
    Table()
    {
        if (this.showTableTitle)
        {
            this.CreateTableTitle(this.tableTitle);
        }

        this.CreateTableHeader(this.tableHeaderColumns);
        this.CreateTableBody();
        this.CreateTableFooter();
    }
}

module.exports = CliTable;
