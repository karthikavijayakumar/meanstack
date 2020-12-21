var students=[
    [1,"st1","mca",142],
    [2,"st2","mca",145],
    [3,"st3","bca",150],
    [4,"st4","bca",135],
]
//print all students name
for( let student of students){
    console.log(student[1]);
}

//find number of students doing mca
cnt=0;
for(let student of students){
   if(student[2]=="mca") {
       cnt++;
   }
}
console.log("number of students in mca  "+cnt);


//find total of marks those who are in bca
var tot=0;
for(let student of students){
    if(student[2]=="bca") {
        tot=tot+student[3]
    }
 }
 console.log("total of bca  "+tot);

 //find student who has highest total

 
