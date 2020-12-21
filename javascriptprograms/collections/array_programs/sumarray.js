var arr=[10,11,12,14,15,16]



// find total sum

 var sum=0;
 for(let items of arr){
     sum=sum+items;
 }
console.log(sum)

// let tot=arr.reduce((num1,num2)=>num1=num2)
// console.log(tot)

var items=arr.splice(1,2)
console.log(arr)