$("#add_btn").on("click" , function () {

    let isvalid = true;

    let task = $("#task").val();
    let taskRegx =/^[a-zA-Z0-9][a-zA-Z0-9-_ ]{2,99}$/
    if(!taskRegx.test(task))
    {
         $("#error").text('*Task not valid ,  failed !');
         isvalid = false;
    }

    if(isvalid)
    {
        alert("Task Added !");

        let now = new Date();
        let time = now.toLocaleTimeString();

        $("#task_added").prepend(" " +task + " <br><br>"  );
       $("#time").prepend(time  + " <br><br><br>");

    }
});

 

