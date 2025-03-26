class Employee {

    person(name,id,salary,role)
    {
        document.writeln("Name : " + name + "<br>");
        document.writeln("ID no.  : " + id + "<br>");
        document.writeln("Salary : " + salary + "<br>");
        document.writeln("Role : " + role + "<br><hr><br>");
    }

}

const e1 = new Employee();
const e2 = new Employee();
const e3 = new Employee();

e1.name = "bhu";


document.writeln("<h2>Employee - 1 </h2>")
e1.person("Aditya" , 1001 , "$"+75000 , "Software Engineer")

document.writeln("<h2>Employee - 2 </h2>")
e2.person("Jane Smith" , 1002 , "$"+82000 , "Product Manager")

document.writeln("<h2>Employee - 3 </h2>")
e3.person("Jane Smith" , 1002 , "$"+82000 , "Product Manager")
