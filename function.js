function text()
{
    console.log("life a prochur khelte hobe");
}
// Function Calling.....
 text();
 text();
 function myFunction(a, b) {
    return a * b;
  }
  var x = myFunction(4, 3);
  console.log(x);
  function sum(a,b,c)
  {
    return a*b*c;
  }
  var x=sum(1,2,3);
  console.log( "Result is: "+x);
  text(250);
  text();
//   Function paramater passing .........:::______:::__________:)
  function Exam_mark(mark)
  {
    console.log(mark);
  }
Exam_mark(100);

function sum1(a,b){
    var sum=a+b;
    console.log(sum);
}
 sum1(32,4);
 function eat(singara,price){

  var dam=singara/price;
  return dam;
 }
 var x=eat(10,5);
 console.log("dma hoilo:"+x);
//  Function More Examp...
function getAgerage(assignment1,assignment2,assignment3)
{
  var total=assignment1+assignment2+assignment3;
  var average=total/3;
  return average;
}
var assignment1Mark=60;
var assignment2Mark=59;
var assignment3Mark=58;

var x=getAgerage(assignment1Mark,assignment2Mark,assignment3Mark);
console.log("Total Mark:"+x);
// DEclaring Object in js
var myComputer={

  brand:'DEll',
  price:39000,
  color:'silver',
  processor:'i7',

}
console.log(myComputer);

function hour(a){
  var time=a*60;
  return time;
}
var t=hour(2);
console.log( "time is :"+t,'s');
// Find odd and even.....
function evod(a){

  if(a%2==0){
    console.log("This is even Number");
  }
  else{
    console.log("This is odd number");
  }
  return a;
}
var bd=evod(5);
console.log(bd);
// leap year check....
var year=2023;
if(year%400==0){
  console.log("Leap Year");
}
else if(year%100==0){
  console.log("It is Not Leap Year");
}
else if(year%4==0){
  console.log("leap year");
}
else{
  console.log("Not Leap year");
}

// sum of all number.. with loop.....
function sumofAnarray(number){
  var sum=0;
  for(var i=0;i< number.length;i++){
    
    if(number[i]%2!=0){
      var sum=sum+number[i];
    }
    console.log(sum);
  }
  
  return sum;
}
const number=[21,2,43,531,31];
var  x=sumofAnarray(number);
// odd number in array ........
function getOddNumber(number1){
  const oddnumber=[];
  for(let i=0;i<number1.length;i++){
    var element=number1[i];
    if(element%2!==0){
      console.log(" "+element);
      oddnumber.push(element);
    }
  }

return oddnumber;
}
var number1=[3,4,5,6,7,8];
const oddnumber=getOddNumber(number1);
var xx= sumofAnarray(oddnumber);
console.log( "sum is:"+xx);
console.log("")
function multiFunction(number){
var result=1;

  for(i=1;i<5;i++){
    result=result*i;
    
    
  }
  return result;

}
var r=multiFunction(4);
console.log( "Factroial of Number is:"+r);






