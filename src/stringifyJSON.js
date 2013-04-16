// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
	var string = '';
	var stringifier = function (obje) {    
	if (obje.length){ 
	    string += obje.shift() + ',';  
	    if (obje.length){
	        stringifier(obj);
	    }
	} else {
	    var key2 = [];
	    for(key in obje){
	        key2.push(key);
	    }
	    var key2I = key2.shift();
	    string += key2I + ':' + obje[key2I] + ',';
	    delete obje[key2I];
	    if (key2.length){
	        stringifier(obje);
	    }
	}
	return string;
	};
	return stringifier(obj);
};