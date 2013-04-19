// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
var string = '';
    var stringifier = function (obj1){
        if ((typeof obj1 === "number"|| typeof obj1 === "boolean" || obj1 === undefined || obj1 === null)){
            string += obj1;
        }else if(typeof obj1 === "string"){ 
            string += "\"" + obj1 + "\"";
        }else if (obj1.length === 0){
            string += "[]"
        }else if (obj1.length){
            string += '[';
            for (var i = 0; i < obj1.length; i ++){
                stringifier(obj1[i]);
                if (i < obj1.length - 1){
                    string += ','
                }
            }
            string += ']';
        } else {
            var keys = [];
            for (key in obj1){
                keys.push(key);  
            }
            if (keys.length === 0){
                string += "{}";
            } else {
                string += '{';
                for (var i = 0; i < keys.length; i ++){
                    if (typeof obj1[keys[i]] !== "function" && obj1[keys[i]] !== undefined){
                        stringifier(keys[i]);
                        string +=':';
                        stringifier(obj1[keys[i]]);
                        if (i < keys.length - 1){
                            string += ','
                        }
                    }
                }
                string += '}';
            }
        }
    };
    stringifier(obj);
    return string;
};