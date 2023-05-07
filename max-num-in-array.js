var a=[43,2,41,51,776];
for(var i =0;i<a.length;i++){
    var small=a[0];
    if(small<a[i]){
        small=a[i];
        console.log("small Number is:"+small);
    }
}