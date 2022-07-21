//1.question 
var  a= obj1 = { name: 'person1', age: 5 };

var b= obj2 = { age: 5, name: 'person 1' };


var areTheyEqual = JSON.stringify(a) === JSON.stringify(b) ;

console.log('Are they equal: ' + areTheyEqual)


//2.question

var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
   for(var i=0;i<result.length;i++){
    console.log(result[i].name);
    console.log(result[i].region);
    console.log(result[i].subregion);
    console.log(result[i].population);
   }

}