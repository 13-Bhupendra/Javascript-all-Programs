const one = document.getElementById("one")
const two = document.getElementById("two")
const btn1 = document.getElementById("btn1")
const h2 = document.getElementById("h2")





btn1.addEventListener("click" , () => {

    let first_number = parseInt(one.value)
    let second_number = parseInt(two.value)
    let sum = first_number + second_number; 

    h2.innerHTML = " Sum of " + first_number + " & " +  second_number + " is :-  " +  sum ;

})
 

btn2.addEventListener("click" , () => {

    let first_number = parseInt(one.value)
    let second_number = parseInt(two.value)
    let sub = first_number - second_number; 

    h2.innerHTML = " Subtraction of " + first_number + " & " +  second_number + " is :-  " +  sub ;

})
 


btn3.addEventListener("click" , () => {

    let first_number = parseInt(one.value)
    let second_number = parseInt(two.value)
    let mult = first_number * second_number; 

    h2.innerHTML = " Multiplication of " + first_number + " & " +  second_number + " is :-  " +  mult ;

})
 


btn4.addEventListener("click" , () => {

    let first_number = parseInt(one.value)
    let second_number = parseInt(two.value)
    let div = first_number / second_number; 

    h2.innerHTML = " Division of " + first_number + " & " +  second_number + " is :-  " +  div ;

})
 

btn5.addEventListener("click" , () => {

    let first_number = parseInt(one.value)
    let second_number = parseInt(two.value)
    let mod = first_number % second_number; 

    h2.innerHTML = " Mod of " + first_number + " & " +  second_number + " is :-  " +  mod ;

})
 