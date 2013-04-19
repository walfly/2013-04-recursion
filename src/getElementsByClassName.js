// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  var storage = [];
  var searchNodes = function (nodes) {
  	for(var i = 0; i < nodes.length; i ++){  		
	  		if (nodes[i].classList && nodes[i].classList.contains(className)){
	  			console.log(nodes[i], "second if")
	  			storage.push(nodes[i]);
	  		}
	  		if(nodes[i].childNodes){
	  			console.log(nodes[i], "first if")
	  			searchNodes(nodes[i].childNodes);
	  		}

  	}
  }

  searchNodes(document.body.childNodes);
  console.log(storage);
  return storage;
};
