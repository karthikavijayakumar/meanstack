var num=8;
var flg=0;



for(let i=2;i<num;i++){
    if(num%i==0){
    flg+=1;
    break;
}
    else{
        flg=0;
    }

}
if(flg>0){
    console.log("not prime")
}
else{
    console.log("prime")
}