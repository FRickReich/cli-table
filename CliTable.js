'use strict';

const color = require("cli-color");

class CliTable
{
    constructor(headerContent)
    {
        this.headerContent = headerContent;
        
        this.columnpadding = 8;
        
        this.tableLength = 200;
        
        this.header = '';
        
        this.tableColor;
    }

    SetColor(inputColor)
    {
        this.tableColor = inputColor;
    }

    SetHeader(headerColumns)
    {
        let headerString = ''; 

        for (let i = 0; i < headerColumns.length; i++) 
        {
            if(i === headerColumns.length - 1)
                headerString += this.CreateColumn(headerColumns[i], true);
            else
                headerString += this.CreateColumn(headerColumns[i]);
        }

        this.header = headerString;
    }

    SetColumnPadding(alignStyle = 'left')
    {
        let leftSpacing = ' ';
        let rightSpacing = ' ';

        if (alignStyle == 'left')
        {
            for (let i = 0; i < this.columnpadding; i++) {
                rightSpacing += ' ';
            }
        }
        else if (alignStyle == 'right')
        {
            for (let i = 0; i < this.columnpadding; i++) {
                leftSpacing += ' ';
            }
        }
        else if (alignStyle == 'center')
        {
            for (let i = 0; i < this.columnpadding / 2; i++) {
                leftSpacing += ' ';
            }

            for (let i = 0; i < (this.columnpadding / 2) + 1; i++) {
                rightSpacing += ' ';
            }
        }

        return { left: leftSpacing, right: rightSpacing };
        
    }

    CreateColumn(columnInput, last = false)
    {
        const columnPadding = this.SetColumnPadding('left');

        return(`|${columnPadding.left}${columnInput}${columnPadding.right}${last ? `|` : ''}`)
    }

    ShowTable()
    {
        console.log(color["bgBlack"]["red"](this.header));
    }
}

module.exports = CliTable;
