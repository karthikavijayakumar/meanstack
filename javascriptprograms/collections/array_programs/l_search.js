var arr=[1,5,3,6,2,8,4]


// searching for an element from this array

// linear searching
var element=8;
var flg=0;

for(let items of arr){
    if(element==items){
        flg+=1;
        break;
        
    }
}
if(flg==0){
    console.log("element not found")
}
else{
    console.log("element found")
}