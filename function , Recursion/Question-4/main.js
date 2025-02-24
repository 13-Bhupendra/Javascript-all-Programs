function factorial(n)
{
    if(n==1)
    {
        return 1 ;

    }
    else{
        return n *  factorial(n-1);
    }
}

let n = prompt("Enter any number : ");
n = parseInt(n);

let ans = factorial(n);

document.write("The factorial of  "+ n + " is :- " +  ans);