var cl=document.querySelector("#clk")
cl.addEventListener("click",()=>{
    cl.textContent="Clicked";
    cl.style.color="red";
})

var ov=document.querySelector("#over")
ov.addEventListener("mouseover",()=>{
    ov.textContent="mouse currently overme";
    ov.style.color="red";
})

var ov=document.querySelector("#over")
ov.addEventListener("mouseout",()=>{
    ov.textContent="mouseover";
    ov.style.color="black";
})

var db=document.querySelector("#double")
db.addEventListener("dblclick",()=>{
    db.textContent="double Clicked";
    db.style.color="blue";
})