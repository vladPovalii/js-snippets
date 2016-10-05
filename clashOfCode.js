// chadox
function shadoksConvert(str){
  var num = parseInt(str, 10);
  var arr = (num.toString(4).split(''));
  if(arr.length === 1){
    console.log('GA');
  }else{
    var item, answer = "";
    while(item = arr.shift()){
      if(item === "0"){
        answer += "GA";
      }else if(item === "1"){
        answer += "BU";
      }else if(item === "2"){
        answer += "ZO";
      }else if(item === "3"){
        answer += "MEU";
      }
    }
    console.log(answer);
  }
}

//leap year
function leapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}