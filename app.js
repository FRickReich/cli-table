'use strict';

const CliTable = require('./CliTable');

const table = new CliTable();

table.SetHeader(["id", "name", "amount"]);

table.ShowTable();