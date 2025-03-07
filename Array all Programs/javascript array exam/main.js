//Filter divisible by 8 numbers from array using .filter() method of array.


document.write("<h2> Q.1)  Filter divisible by 8 numbers from array using .filter() method of array. <br></h2>")
let filter_arr = [24,4,248,8,21,40,56]

let filter_it = filter_arr.filter((e) => {

    return e % 8 == 0 ;
});

document.write("The Numbers Divisible by 8 is :- " + filter_it);

document.write("<br><br><hr><hr><br><br>")

document.write("<h2> Q.2) Remove repeated elements from an array and sort in ascending order.  <br></h2>")


//Remove repeated elements from an array and sort in ascending order.

let arr = [1,7,3,2,4,5,2]

document.write("Defined : " + arr + "<br>")

let ascending = arr.sort()
 
let remove = arr.splice(2,1)
{   
    document.write("Array after " + arr)
}




document.write("<br><br><hr><hr><br><br>")


//Check if the given string is a palindrom or not.


document.write("<h2> Q.3) Check if the given string is a palindrom or not.</h2>")

let Name_is = prompt("Enter any name : ")
let palindrom = "";

for(let i=Name_is.length-1; i>=0; i--)
{
    palindrom += Name_is[i]    
}
    if(Name_is == palindrom)
    {
        document.write(Name_is + " Is a palindrome name !");
    }
    else{
        document.write(Name_is + " Is not a palindrome name !")
    }