const user_name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("pass");
const con_password  = document.getElementById("con-pass");

const login_btn = document.getElementById("login_btn")

let error = document.getElementById("error")
 





login_btn.addEventListener("click" , () => {
    formvalidation();

});


 


    function formvalidation(){
        if(user_name.value == "" || email.value == "" || password.value == "" || con_password.value == "")
        {
            error.innerHTML = "*All the inputs must be filled"
        }
        else
        {
            error.innerHTML = "* login Successfull !"
        }

    }
 