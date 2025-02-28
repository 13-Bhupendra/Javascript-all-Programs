
function sum(num1,num2)
{
    document.write("Sum of Number 1 and 2 is  :- " + (num1+num2) + "<br><hr>");
}

function sub(num1,num2)
{
    document.write("Sub of Number 1 and 2 is  :- " + (num1-num2) + "<br><hr>");
}

function mult(num1,num2)
{
    document.write("Mult of Number 1 and 2 is  :- " + (num1*num2) + "<br><hr>   ");
}

function div(num1,num2)
{
    document.write("Division of Number 1 and 2 is  :- " + (num1/num2) + "<br><hr>");
}

function mod(num1,num2)
{
    document.write("Module of Number 1 and 2 is  :- " + (num1%num2) + "<br><hr>");
}

 
{
    let num1 = prompt("Enter first Number :- ")
    let num2 = prompt("Enter second Number :- ")
    num1=parseInt(num1);
    num2=parseInt(num2);

    let choice = prompt("Enter a sign among  (- , * , / , + , % ) :- ");

    switch(choice)
    {
        case "+" : 
        document.write = sum(num1,num2)
        break;

        case "-" : 
        document.write = sub(num1,num2)
        break;

        case "*" : 
        document.write = mult(num1,num2)
        break;

        case "/" : 
        document.write = div(num1,num2)
        break;

        case "%" : 
        document.write = mod(num1,num2)
        break;

        default : document.write("Enter valid sign !")
    }

}
