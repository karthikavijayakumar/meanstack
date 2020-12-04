// find largest number among three numbers
var num1=10,num2=20,num3=30;
if((num1>num2)&(num1>num3)){
    if(num2>num3){
    console.log(num2+"second largest");
}
else{
    console.log(num3+"second laregest")
}
}
else if((num2>num1)&(num2>num3)){
    if(num1>num3){
        console.log(num1+"second largest");
    }
    else{
        console.log(num3+"second laregest")
    }
    
}

else if((num3>num1)&(num3>num2)){
    if(num2>num1){
        console.log(num2+"second largest");
    }
    else{
        console.log(num1+"second laregest")
    }
    
}