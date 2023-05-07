// Math Function and its application in js programming...

var result=Math.pow(3,2);
console.log( "Result is:"+result);
// abs() function and this function return '+' Value...

 var a=-4;
 var b= Math.abs(a);
 console.log( "Result is:"+b);
//  For Round any Number ...... fraction to integier number...

var r=3.11;
var s=Math.round(r);
console.log("Full_Number is:", s);
const sw=Math.ceil(4.55);
console.log( "res:",sw);
// Random Value ....
console.log(Math.random());

var  ran=Math.round(Math.random()*6) ;

console.log(ran);
if(ran==5){
    console.log("Lucky Number");
}
else if(ran==4){
    console.log("Not Lucky Number!");
}
else
{
    console.log("Your Luck is so bad!");
}
var adjacent=1;
var hypotenuse=1;
// invers circular function.......
 var cos=Math.acos(adjacent / hypotenuse);
 console.log(cos);
 function calcAngle(opposite, hypotenuse) {
    return Math.atan(opposite / hypotenuse);
  }
  
  console.log(calcAngle(6, 10));

