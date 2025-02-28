function factorial (num)
{
    for (let i=num-1; i>=1; i-- )
    {
        num = num * i;
    }
    document.write("Factorial of " + a + " is :- " + num);
}

let num = prompt("Enter Ny number :- ");
a = parseInt(num);

factorial(num);