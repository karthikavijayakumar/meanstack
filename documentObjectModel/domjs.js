// var heads=document.getElementsByTagName("h1")
// for (head of heads){
//     head.style.color="green";
// }

// var hd=document.getElementById("one")
// hd.style.color="red";

// var hd1=document.getElementById("two")
// hd1.style.color="blue"


// var lis=document.getElementsByClassName("lis")
// for (head of lis){
//     head.style.color="yellow";
// }

// var dm=document.getElementById("dm")
// dm.textContent="Document Object Methods"
// dm.innerHTML="<em>Document Object Methods</em>"


var lis=document.querySelectorAll("li")
lis.forEach(li=>li.style.color="red")


var ls=document.querySelectorAll(".lis")
ls.forEach(l=>l.style.color="green")

var hd=document.querySelector("#one")
hd.style.color="orange"
