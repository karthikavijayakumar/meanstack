class Student{
    
    constructor(rol,name,course){
        this.rol=rol;
        this.name=name;
        this.course=course;
    }

    printStudent=()=>{
        console.log("rol="+this.rol);
        console.log("name="+this.name);
        console.log("course="+this.course);
    }
}

let obj=new Student(100,"ajay","mca")

obj.printStudent()
// console.log(obj.name)
// obj.name="AJAY";
// console.log(obj.name)


// different types of variables
// instance variables
// instance variables are always prepended with 'this' keyword
// we can access instance variable within the class by using 'this' keyword
// we can access instance variable outside the class by using reference name.instance variable name



// setStudent() duty is initializing instance variable

// constructor()
// duty is initializing instance variable
// it is invoked automatically at the time of object creation