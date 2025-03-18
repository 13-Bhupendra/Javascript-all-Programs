const number = document.getElementById("number")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")

let  count = 0 ;
 
btn1.addEventListener("click" , () => {

    count ++ ;
    number.innerHTML = count;

});

btn2.addEventListener("click" ,() => {

    if(count > 0 )
    {
        count --;
    }
    number.innerHTML = count;

});

btn3.addEventListener("click" , () => {

    if(count == 0)
    {
        number.innerHTML = "Can`t process with 0 !"
    }
    else
    {
        count *= 2;
        number.innerHTML = count;

    }

});

btn4.addEventListener("click" , () => {

    if(count == 0)
    {
        number.innerHTML = "Can`t process with 0 !"
    }
    else
    {
        count  = Math.floor(count /= 2);
        number.innerHTML = count;

    }

}); 