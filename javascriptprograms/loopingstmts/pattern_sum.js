//2
//2+22


//3
//3+33+333

//4
//4+44+444+4444

var num=4;
var i=1;
var sum=0
var total=0;
while(i<=num){//1<=3   2<=3   3<=3
    total=total*10+num;//0*10+3=3   3*10+3=33    33*10+3=333
  sum=sum+total;

    i++;//i=2 i=3
}
console.log(sum);