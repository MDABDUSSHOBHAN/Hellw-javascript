var friendAge={

    Nyme:21,
    karim:11,
    jodhu:32,
    modhu:11,
};
const values=Object.keys(friendAge);
console.log(values);
for(propertyName in friendAge){

    const value=friendAge[propertyName];
    console.log(propertyName,value);
}
var st_info={

    sadik:90,
    rahim:67,
    santo:32,
    jabbar:34
};
// console.log(st_info);
var key=Object.keys(st_info);

console.log(key);
// For in loop around object 

for(propertyName in st_info){

    var val=st_info[propertyName];
    console.log(propertyName,val);
}