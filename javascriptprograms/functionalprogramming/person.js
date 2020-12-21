var arr=[10,11,8,7,6,12,13]



// //find even numbers from array

// for(let num of arr){
//     if(num%2==0){
//         console.log(num)
//     }
// }
// var data=arr.filter(num=>num%2==0)
// console.log(data)

// //find squares of each number in the array

// for(let num of arr){
//     console.log(num**2);
// }
// var data=arr.map(num=>num**2)
// console.log(data)

// //find cube of each number in the array

// for(let num of arr){
//     console.log(num**3);
// }

// var data=arr.map(num=>num**3)
// console.log(data)

// // // find double of each element in the array

// // for(let num of arr){
// //     console.log(num+num);
// // }
// var data=arr.map(num=>num+num)
// console.log(data)


// // map()
// // filter()

var names=["alan","abhi","bins","binoy","biju"]

var data=names.map(name=>name.toUpperCase())
console.log(data)

var data=names.filter(name=>name.charAt(0)=='a')
console.log(data)