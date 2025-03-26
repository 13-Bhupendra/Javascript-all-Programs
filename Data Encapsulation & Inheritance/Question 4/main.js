// perform multilevel inheritance where Indian is parent for class person, person is parent for class employee
// indian class - adharNo,birthPlace
// person - name,age,gender
// emp - id,salary,role
// access all properties of parent by child class only and set and get all values.
 
class India{

    constructor(adharNo , birthPlace){

        this.adharNo = adharNo ;
        this.birthPlace = birthPlace;
    }

    India_info_print(){

        document.writeln("Adhar card No.  :" + this.adharNo +  "<br>") ;
        document.writeln("Birth place : " + this.birthPlace + "<br>");
    }

}


class Person extends India {

    constructor(adharNo,birthPlace,name,age,gender){

        super(adharNo,birthPlace)

        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    Person_info_print(){

        super.India_info_print();
        document.writeln("Name : "+ this.name  + "<br>");
        document.writeln("Age : "+ this.age  + "<br>");
        document.writeln("Gender : "+ this.gender  + "<br>");
    }

}


class Employee extends Person {

    constructor(adharNo,birthPlace,name,age,gender,id,salary,role){

        super(adharNo,birthPlace,name,age,gender)
        this.id = id;
        this.salary = salary;
        this.role = role;

    }

    Employee_info_print(){

        super.Person_info_print();
        document.writeln("Id no.   : "+ this.id  + "<br>");
        document.writeln("Salary : "+ this.salary  + "<br>");
        document.writeln("Role  : "+ this.role  + "<br>");
    }
}


const info = new Employee(5487268451254 , "India" , "Rahul" , 34 , "Male" , 1003 , "$"+71500 ,"Labour")

document.writeln( "<h2>Indian - info </h2>")
info.India_info_print();

document.writeln("<hr><h2>Person - info </h2>")
info.Person_info_print();

document.writeln("<hr><h2>Employee - info </h2>")
info.Employee_info_print();