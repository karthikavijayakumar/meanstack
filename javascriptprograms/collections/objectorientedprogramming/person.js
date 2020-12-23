class Person{

    setPerson=(age,name,gender)=>{
        this.age=age;
        this.name=name;
        this.gender=gender;
    }

    printPerson=()=>{
        console.log("name="+this.name);
        console.log("age="+this.age);
        console.log("gender="+this.gender);
    }
}
// object

var obj=new Person();
obj.setPerson(25,"ajay","male")
obj.printPerson()


var obj1=new Person();
obj1.setPerson(26,"vijay","male")
obj1.printPerson()