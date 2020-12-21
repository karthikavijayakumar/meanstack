let arr=[3,4,6]  //[10,9,7]
var total=0;
for (let num of arr){
    total+=num;
}
console.log(total) //13
//13-3=10
//13-4=9
//13-6=7
var res=[]
for(let num of arr){
    let item=total-num;//13-3
    res.push(item)
}
console.log(res)

//[2.3.4]      [7,6,5]
let array=[2,3,4]
var total=0;
for (let num of array){
    total+=num;
}
console.log(total)
var res=[]
for (let num of array){
    let item=total-num;
    res.push(item)
}
console.log(res)



// let arr=[1,2,3,4,7]    //6  (4,2)

//7(3,4)