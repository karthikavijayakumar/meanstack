var arr=[1,2,33,34,35]


// var squ=arr.map(num=>num**2)
// var even=arr.filter(num=>num%2==0)
//map()
//filter()
//reduce()
//sort()


var max=arr.reduce((no1,no2)=>no1>no2?no1:no2)
console.log(max)



var min=arr.reduce((no1,no2)=>no1<no2?no1:no2)
console.log(min)

var sum=arr.reduce((no1,no2)=>no1+no2)
console.log(sum)

var sort=arr.sort((no1,no2)=>no1-no2)
console.log(sort)

