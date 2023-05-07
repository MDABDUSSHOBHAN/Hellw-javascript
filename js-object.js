var myComputer={
brand:'dell',
price:3900,
processor:'i5',
color:'silver',

};
myComputer.processor='i45';
console.log(myComputer);
const shoppingCard={
     
    book:3,
    sunGlass:1,
    pen:2,
    mouse:5,
    keybord:3,
};
// When i know the property value ..... to get the property element by notation.....

var v=Object.keys(shoppingCard);
console.log(v);
// when i know property name and get value of the property......
var y=shoppingCard['book'];
// set objet value....
var b=shoppingCard.mouse=43;

console.log(b);





