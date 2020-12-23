class Parent{
    m1=()=>{
        console.log("inside parent1")
    }
}

class Child extends Parent{
    m2=()=>{
        console.log("inside Child")
    }
}

class SubChild extends Child{
    m3=()=>{
        console.log("inside SubChild")
    }
}

var sb=new SubChild()
sb.m3()
sb.m2()
sb.m1()


var ch=new Child()
ch.m2()
ch.m1()

var p=new Parent()
p.m1()

// multilevel inheritance