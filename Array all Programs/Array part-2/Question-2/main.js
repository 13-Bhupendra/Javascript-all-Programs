let Name_is = prompt("Enter any Name to check Frequency : ")
let count;

for(let i=0; i<Name_is.length; i++)
{
    count = 0;

    for(j=0; j<=Name_is.length; j++)
    {
        if(Name_is[i] == Name_is[j])
        {
            count++;
        }
     }
     document.write(Name_is[i] + " - " + count + "<br>");
    
}