function print(n , start)
{

    if (n<start)
    {
        return 1;
    }

    document.write(start + " ")
    print(n , start + 1);


}

let n = prompt("Enter any number : ");
n = parseInt(n);

print(n , 1);