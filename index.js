/* 
 * Project : csv_parser_js
 * Author  : Rasmus Wissing Kallehauge
 * Tele    : +45 42 46 98 18
 * Email   : rkallehauge@gmail.com
 * Created : 18-10-2018 18:23:32
 */

/**
 * 
 * @param {string} path to csv 
 * @returns {undefined}
 */
function CSVParser(path){
    
    
    // Set path
    this.path = path;
    
    // Require simple file system, for reading files and such.
    const fs = require('fs');
    
    // Require readline, for the fs readstream and also the stdin stream.
    const readline = require('readline')
    
    // Convert data into JSON
    this.JSON = function(keys, values){
    
    
        return data;
    }
    
    this.parse = function(){
        
        reader = readline.createInterface({
            // Create readstream with filepath
           input : fs.createReadStream(path),
            // Set crlf delay to infinity, so any \r\n will be considered a newline.
           crlfDelay : Infinity
        });
        
        // Determine whether or not the first line should be treated as keys.
        var firstLine = true;
        
        // Initialize containers for data.
        var keys = [];
        var values = [];

        
        // Go through all lines
        reader.on('line', function(line){
            
            // If this is the first line, grab these values to use as keys for later.
            if(firstLine){
                // Stop the previous condition turning true, so this code wont repeat.
                firstLine = false;
                // 
                keys = line.split(",");
            } else{
                console.log(line);
                // Append array from line to end of values.
                values.push(line.split(","));
            }
            
        });
        
       
        console.log(values);
    }
    
}

var myTest = new CSVParser('testFile.csv');
myTest.parse();