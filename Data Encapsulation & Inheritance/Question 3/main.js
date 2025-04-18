// create a class named student with private attributes roll_no,name,age,std and percentage, initialize
// all attributes by parameterized constructor(private attributes need to declare in global scope in class)
// and print all details for 3 students.

class Students{

    #name;
    #roll_no;
    #age;
    #std;
    #percentage;

    constructor(name,roll_no,age,std,percentage){

        this.#name = name;
        this.#roll_no = roll_no;
        this.#age = age;
        this.#std = std;
        this.#percentage = percentage;
    }

    print(){

        document.writeln("Name : " + this.#name + "<br>");
        document.writeln("Roll Number  : " + this.#roll_no + "<br>");
        document.writeln("Age : " + this.#age + "<br>");
        document.writeln("STD : " + this.#std + "<br>");
        document.writeln("Percentage : " + this.#percentage + "<br><hr>");

    }
}

const s1 = new Students ("Pratik" , 14 , 17+"years" , 11+"th" , 67.24+"%");
const s2 = new Students ("Aditi" , 1 , 15+"years" , 9 +"th" , 87.44+"%");
const s3 = new Students ("Rahul" , 26 , 19+"years" , 12+"th" , 77.34+"%");

document.writeln('<h2> Student - 1 </h2>')
s1.print();
document.writeln('<h2> Student - 2 </h2>')
s2.print();
document.writeln('<h2> Student - 3 </h2>')
s3.print();