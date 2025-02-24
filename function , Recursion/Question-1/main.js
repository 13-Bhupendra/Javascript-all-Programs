function sumof(n)
{
    if(n > 1)
    {
        return n + sumof(n - 1);
    }
    else
    {
        return 1;
    }
}

let n = prompt("Enter any number : ")
n = parseInt(n);    

let ans = sumof(n);
document.write("Sum of 1 to N number is :-  " + ans);