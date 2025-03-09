let Name_is =  prompt("Enter any palindron name to check : ")
let reverse_name = "" ;

for(let i=Name_is.length-1; i>=0; i--)
{
    reverse_name += Name_is[i]
}

if(reverse_name==Name_is)
{
    document.write(Name_is + " is a palindrome name !");

}
else
{
    document.write(Name_is + " is not a palindrome name ! "); 
}

 
