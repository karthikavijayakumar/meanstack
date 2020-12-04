var number=123;

var data="";
while(number!=0){

    var digit=number%10;
    data=data+String(digit);
    number=Math.floor(number/10);
}
console.log(data);