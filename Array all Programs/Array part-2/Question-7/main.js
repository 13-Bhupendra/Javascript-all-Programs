

let array_is  = ["Virat Kohli ", " Rohit Sharma ", " Shikhar Dhawan ", " KL Rahul ", " Jasprit Bumrah ", " Rishabh Pant ", " Hardik Pandya "]

document.write("Defined Array is :-  "+  array_is + " <hr><br> ")

//.Push
{
    let first = array_is.push(" Akshar Patel ");
    document.write(" 1)  &nbsp&nbsp " + "Array using .Push :-  "  + array_is + "<hr><br>")
}



//.pop 
{
     array_is  = ["Virat Kohli ", " Rohit Sharma ", " Shikhar Dhawan ", " KL Rahul ", " Jasprit Bumrah ", " Rishabh Pant ", " Hardik Pandya "]

    let second = array_is.pop()
    document.write(" 2)  &nbsp&nbsp " +"Array using .Pop :-  "  + second + "<hr><br>")
}


 
//.shift
{
    array_is  = ["Virat Kohli ", " Rohit Sharma ", " Shikhar Dhawan ", " KL Rahul ", " Jasprit Bumrah ", " Rishabh Pant ", " Hardik Pandya "]

    let third = array_is.shift()
    document.write(" 3)  &nbsp&nbsp " +"Array using .Shift :-  "  + third + "<hr><br>")
}



//.unshift
{
    array_is  = ["Virat Kohli ", " Rohit Sharma ", " Shikhar Dhawan ", " KL Rahul ", " Jasprit Bumrah ", " Rishabh Pant ", " Hardik Pandya "]

    let fourth = array_is.unshift("MS Dhoni")
    document.write(" 4)  &nbsp&nbsp " +"Array using .Unshift :-  "  + array_is + "<hr><br>")
}


//.Join
{
    array_is  = ["Virat Kohli ", " Rohit Sharma ", " Shikhar Dhawan ", " KL Rahul ", " Jasprit Bumrah ", " Rishabh Pant ", " Hardik Pandya "]

    let fifth = array_is.join(" *_* ")
    document.write(" 5)  &nbsp&nbsp " +"Array using .Join :-  "  + fifth + "<hr><br>")

}


//.Sort
{
    array_is  = ["Virat Kohli ", " Rohit Sharma ", " Shikhar Dhawan ", " KL Rahul ", " Jasprit Bumrah ", " Rishabh Pant ", " Hardik Pandya "]
    nums = [10 , 20 ,30 ,40, 50 ,60 ,70 ,80 ,90 ]

    let sixth = array_is.sort()
    document.write(" 6.1 )  &nbsp&nbsp " +"Array using .Sort :-  "  + sixth + "<br><br>")
    
    let sixth_ = nums.sort()
    document.write(" 6.2 )  &nbsp&nbsp " + "Array using .Sort :-  "  + sixth_ + "<hr><br>") 

}


//.at
{
    array_is  = ["Virat Kohli ", " Rohit Sharma ", " Shikhar Dhawan ", " KL Rahul ", " Jasprit Bumrah ", " Rishabh Pant ", " Hardik Pandya "]

    let seven = array_is.at(6)
    document.write(" 7)  &nbsp&nbsp " +"Array using .at :-  "  + seven + "<hr><br>")

}


 
//splice 
{
    array_is  = ["Virat Kohli ", " Rohit Sharma ", " Shikhar Dhawan ", " KL Rahul ", " Jasprit Bumrah ", " Rishabh Pant ", " Hardik Pandya "]

    let eight = array_is.splice(2,1)
    document.write(" 8.1 )  &nbsp&nbsp " + "Array using .splice  :-  "  + eight + "<br><br>")
    
    let eight_ = array_is.splice(2,1, " Varun Chakravarti")
    document.write(" 8.2 )  &nbsp&nbsp " + "Array using .splice :-  "  + array_is + "<hr><br>")
    

}


//slice 
{
    array_is  = ["Virat Kohli ", " Rohit Sharma ", " Shikhar Dhawan ", " KL Rahul ", " Jasprit Bumrah ", " Rishabh Pant ", " Hardik Pandya "]

    let nine = array_is.slice(2,5)
    document.write(" 9)  &nbsp&nbsp " + "Array using .slice :-  "  + nine + "<hr><br>")

}


//indexoff
{

    array_is  = ["Virat Kohli ", " Rohit Sharma ", " Shikhar Dhawan ", " KL Rahul ", " Jasprit Bumrah ", " Rishabh Pant ", " Hardik Pandya "]

    let tenth = array_is.indexOf(" Shikhar Dhawan ")
    document.write(" 10)  &nbsp&nbsp " + "Array using .Indexof :-  "  + tenth + "<hr><br>")
    
}




//concat
{

    array_is  = ["Virat Kohli ", " Rohit Sharma ", " Shikhar Dhawan ", " KL Rahul ", " Jasprit Bumrah ", " Rishabh Pant ", " Hardik Pandya "]
    let array_two = [' MS Dhoni ', ' Sachin Tendulkar '];

    let eleventh = array_two.concat(array_is)
    document.write(" 11)  &nbsp&nbsp " + "Array using .Concat :-  "  + eleventh + "<hr><br>")
    
}

