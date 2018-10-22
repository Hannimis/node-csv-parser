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
 * @returns {CSVParser} returns a CSVParser object
 */
function CSVParser(path){
    
    
    // Set path
    this.path = path;
    
    // Require simple file system, for reading files and such.
    const fs = require('fs');
    
    // Require readline, for the fs readstream and also the stdin stream.
    const readline = require('readline');
    
    /**
     * 
     * @returns {json} Returns the CSV converted into JSON
     */
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

        var output;
        
        // Go through all lines
        reader.on('line', function(line){
            
            // If this is the first line, grab these values to use as keys for later.
            if(firstLine){
                // Stop the previous condition turning true, so this code wont repeat.
                firstLine = false;
                // 
                keys = line.split(",");
            } else{
                
                // Append array from line to end of values.
                values.push(line.split(","));

            }
            
        });
        
        // Once the reader has gone through all lines and has closed
        // We will convert it into JSON
        reader.on('close', function(){
            
            // Create container for objects
            var objectArray = [];
            
            // Loop through values
            for(var i = 0; i < values.length; i++){
                
                // Create empty object
                var object = new Object();
                
                // Loop through the arrays within the values array
                for(var j = 0; j < values[i].length; j++){
                    
                    // Set object properties 
                    object[keys[j]] = values[i][j];
                }
                objectArray.push(object);
            }
            output = JSON.stringify(objectArray);
        });
        
        return output;
    }
    
}

var myTest = new CSVParser('testFile.csv');
console.log(myTest.parse());
