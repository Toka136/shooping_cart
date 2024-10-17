class user
{
   constructor(name,email,password,id)
   {
    this.price=parseInt(0);
    this.id=id;
    this.name=name;
    this.email=email;
    this.password=password;
    this.products=[];
    this.cart=parseInt(0);
   }
}
let num=0;
 let users=[];
 function getdata()
 {
     let arr=window.localStorage.getItem("users");
     if(arr)
     {
         users=JSON.parse(arr);
        
     }
     let n=window.localStorage.getItem("usercount");
     if(n)
     num=JSON.parse(n);
 }
 window.onload=function()
{
    // window.localStorage.clear();
    getdata();
}
 function adduser()
{
    let form=document.getElementById("form");
    // console.log(form);
    // form.submit();
    let name=document.getElementById("UserName");
    let email=document.getElementById("Email");
    let password=document.getElementById("Password");
    let reg_button=document.getElementById("reg");
    if(name.value==="")
    {
        console.log("z")
        name. setAttribute("placeholder","Please Fill This Field");
    }
    else if(email.value==="")
        {
            console.log("z")
            email. setAttribute("placeholder","Please Fill This Field");
        }
    else if(password.value==="")
    {
        console.log("z")
        password. setAttribute("placeholder","Please Fill This Field");
    }
    else 
    {
        let x=0;
        for(let i=0;i<users.length;i++)
        {
            if(password.value===users[i].password)
            {
                password.value='';
                password. setAttribute("placeholder","Invalid Password(Repeated)");
                password.style.cssText='color:red';
                x=1;
                break;
            }
        }
        if(!x)
        {
        let NewUser = new user(name.value,email.value,password.value,num);
        num++;
        users.push(NewUser);
        reg_button.setAttribute("href","index.html");
        localStorage.setItem("users",JSON.stringify(users));
        localStorage.setItem("usercount",JSON.stringify(num));
        }
    }
   
    
    
    
}