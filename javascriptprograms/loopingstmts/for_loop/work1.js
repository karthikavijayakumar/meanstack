var lower=10;
var upper=50;
var flg=0

for (let i=lower;i<=upper;i++){
    let flag=0;

    for(let j=2;j<i;j++){
        if(i%j==0){
            flag+=1;
            break;
        }
    }
    if(flag==0){
        console.log(i)
    }
}



function factorial(num){
    let fact=1;
    for(let i=1;i<=num;i++){
    fact=fact*i;
}
console.log(fact)
}

factorial(7)