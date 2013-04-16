// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
	var string = '';
    var stringifier = function (obj1){
        if (obj1.length){
            var thisIndex = obj1.shift();
            if (typeof thisIndex !== "number" && typeof thisIndex !== "string" && typeof thisIndex !== "boolean" && thisIndex !== null && !thisIndex.length){
                stringifier(thisIndex); 
            } else {
                string += thisIndex + ',';
                if(obj1.length){
                    stringifier(obj1);  
                }
            }
        } else {
            var keys = [];
            for (key in obj1){
                keys.push(key);  
            }
            var key1 = keys.shift();
            var thisObj = obj1[key1];
            if (typeof thisObj !== "number" && typeof thisObj !== "string" && typeof thisObj !== "boolean" && thisObj !== null && !thisObj.length){
                  stingifier(thisObj);
            } else {
                string += key1 + ':' + thisObj + ','; 
                delete obj1[key1];
                if (keys.length){
                    stringifier(obj1);  
                }
            }
        }
        return string;
    };
    return stringifier(obj);
};