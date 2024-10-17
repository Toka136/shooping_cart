// // import { users } from "./regs";


let users=[];
let c=0;
function check()
{
    console.log("in");
    let email=document.getElementById("inputEmail");
    let password=document.getElementById("inputPassword");
    let button=document.getElementById("send");
    let f=0;
    if(email.value==="")
        {
            // console.log("z")
            email. setAttribute("placeholder","Please Fill This Field");
        }
    else if(password.value==="")
    {
        // console.log("z")
        password. setAttribute("placeholder","Please Fill This Field");
    }
    for(let i=0;i<users.length;i++)
    {
        if(users[i].email===email.value&&users[i].password===password.value)
        {
            console.log(users[i].name);
            // 
            localStorage.setItem("currentuser",JSON.stringify(users[i]));
            button.setAttribute("href","main.html");
       
         console.log(data);
        //  Hello(users[i].name);
       
            f=1;
            break;
        }
    }
    if(f===0)
    {
        c++;
        if(c>=3)
        {
            c=0;
            button.setAttribute("href","reg.html");
        }
           
        let alert =document.querySelector(".alert");
        alert.classList.remove("hidden");
       
    }
   
    // button.setAttribute("href","index.html");
}
function getdata()
{
    let arr=window.localStorage.getItem("users");
    if(arr)
    {
        users=JSON.parse(arr);
       
    }
}
function Hello(name1)
{
    
    // data.innerHTML= "name1";
}
window.onload=function()
{
    // window.localStorage.clear();
    getdata();
}
