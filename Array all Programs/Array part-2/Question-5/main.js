let digits = [54, 94 ,51 ,32 ,10 ,40 ,2 ,6 ,3,]

for(let i=0; i<=digits.length; i++)
{
    for(let j=i+1; j<=digits.length; j++)
    {
        if(digits[i] > digits[j])
        {
             let temp = digits[i]
             digits[i] = digits[j]
             digits[j] = temp 
        }
    }
}

document.write("Ascending order :-   " + "  " + digits)