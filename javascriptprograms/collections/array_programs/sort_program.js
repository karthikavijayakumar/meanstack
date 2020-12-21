var arr = [8, 6, 2, 7, 3]
arr.sort((no1,no2)=>no1-no2)//no2 comes after no1
console.log(arr)


//sorting

//arr.sort((no1,no2)=>no1-no2)//ascending order    no2-no1=>descending order

// arr [8,6,2,7,3]
//      0,1,2,3,4
//      i j

// for (let i = 0; i < arr.length; i++) {//i=o
//     for (j = i + 1; j < arr.length; j++) {
//         //j=1   j=2    
//         if (arr[i] > arr[j]) {//8>6  6>2  2>7
//             var temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log(arr)