let str = "";
let buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((elmt) =>{
    elmt.addEventListener('click',(e) =>{
        if(e.target.innerHTML == "="){
            str = eval(str);
            document.querySelector(".input").value = str;
        }
        else if(e.target.innerHTML =="C"){
            str = "";
            document.querySelector(".input").value ="0"; 
        }
        else{
            str+=e.target.innerHTML;
            document.querySelector(".input").value = str;
        }
    })
})
