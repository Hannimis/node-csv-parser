/* 
 * Project : csv_parser_js
 * Author  : Rasmus Wissing Kallehauge
 * Tele    : +45 42 46 98 18
 * Email   : rkallehauge@gmail.com
 * Created : 18-10-2018 18:23:32
 */

var exports = module.exports = {
    
/**
 * 
 * @param {string} path to csv 
 * @returns {CSVParser} returns a CSVParser object
 */
createParser: function(data){
    
    
    
    
    // Set path
    this.data = data;
    
    
    // Require simple file system, for reading files and such.
    const fs = require('fs');

    /**
     * @returns {json} Returns the CSV converted into JSON
     */
    this.parse = function(){
        var lines;
        if(fs.existsSync(data)){
            // If data is a file
            lines = fs.readFileSync(data, 'utf-8').split('\n').filter(Boolean);
        } else{
            // If data is a string
            lines = data.split('\n');
        }
        
        
        // Initialize containers for data.
        var keys = [];
        var values = [];
        
        for(var i = 0; i < lines.length; i++){
            // If current iteration is on first line
            // Set keys to be array from this line
            if(i === 0){
                keys = lines[i].split(',');
                
            // All other lines should just be made into arrays then appended to values
            } else{
                values.push(lines[i].split(','));
            }
        }
        
        // Create container for objects
        var objectArray = [];
        
        for(var i = 0; i < values.length; i++){
            
            // Create empty object
            var object = {};
            
            for(var j = 0; j < values[i].length; j++){
                // Set object property name to key on index j, and it's value to the value in values on the same index
                object[keys[j]] = values[i][j];
            }
            // Append object to end of container
            objectArray.push(object);
        }
        
        // Return the array in JSON format
        try{   
            return JSON.stringify(objectArray);
        }
        catch(e){
            console.log('Error occured : ', e);
        }
        
    };
            
    return this;
    }
};