//------------------------------------------------ ARRAYS ---------------------------------------------//
// loop without index (pop method changes the length of the array)
var item; 
while ((item = arr.pop()) != null) {
	//...
}
// arr.length === 0

// same, with index, dont change the array
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