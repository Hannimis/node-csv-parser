/* 
 * Project : csv_parser_js
 * Author  : Rasmus Wissing Kallehauge
 * Tele    : +45 42 46 98 18
 * Email   : rkallehauge@gmail.com
 * Created : 23-10-2018 21:35:03
 */
// Fetch the file
var myParser = require('./index.js');

// Path to CSV file, or the csv from a string
var filename = 'testFile.csv';
var string = 'Firstname, Surname, Address, City, State, Zip\nJohn,Doe,120 jefferson st.,Riverside, NJ, 08075\nJack,McGinnis,220 hobo Av.,Phila, PA,09119\n"John ""Da Man""",Repici,120 Jefferson St.,Riverside, NJ,08075\nStephen,Tyler,"7452 Terrace ""At the Plaza"" road",SomeTown,SD, 91234\n,Blankman,,SomeTown, SD, 00298\n"Joan ""the bone"", Anne","9th at Terrace plc",Desert City,CO,00123';


// Initialize the parser
var fileParser = myParser.createParser(filename);
var stringParser = myParser.createParser(string);
// Perform parse, this returns the CSV, but in JSON.

console.log(fileParser.parse());

console.log(stringParser.parse());