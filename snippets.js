//------------------------------------------------ ARRAYS ---------------------------------------------//
// without index
var item; 
while ((item = arr.pop()) != null) {
	//...
}

// same, with index
var item;
var len = arr.length-1;
while(len >= 0){
	item = arr[len];
	len--;
}

// sorting of array of numbers by descending:
arr.sort(function(a,b){
	return a<b;
});

//------------------------------------------------ THIS ---------------------------------------------//

//example 1
setTimeout(this.someFunc.bind(this), 1000);

//example 2
setTimeout(function(){
	this.someFunc();
}.bind(this), 1000);


//----------------------------------------------- OTHERS -------------------------------------------//