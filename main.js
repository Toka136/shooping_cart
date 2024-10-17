class product
{
   constructor (id,imgurl,name,price,value)
   {
    this.id=id;
    this.imgurl=imgurl;
    this.name=name;
    this.price=price;
    this.value=value;
   }
}
let currentuser;
let products=[];
let currentProd=[];
let users=[];
let logout=document.getElementById("logout");
let logout_button=document.getElementById("showdata");
let buttons=document.querySelectorAll(".btn");
let cartcount=document.querySelector(".count");
let Prodlist=document.querySelector(".products ul");
let totalprice1=document.querySelector(".totalprice");
let prodCart=document.querySelector(".products");
let carticon=document.getElementById("carticon");
let closebtn=document.getElementById("close");
let plus_buttons=[];
let minus_buttons=[];

function plus_Prod()
{
    console.log("in");

    plus_buttons.forEach(element => {
        // console.log(element);
        element.onclick=function()
        {
            console.log("#".repeat(10));
            let i=element.getAttribute("id");
            // list of products of current user
            let list=currentuser.products;
            console.log(list);
            // product want to plus
            let x=currentProd[i];
            console.log("#".repeat(10));
            console.log(x);
            for(let i=0;i<list.length;i++)
            {
                if(x.id===list[i].id)
                {
                    list[i].value++;
                    console.log("pric"+list[i].price)
                    currentuser.price+=parseInt(list[i].price);
                     let pc=element.previousSibling;
                    pc.innerHTML= list[i].value;
                    totalprice1.innerHTML= currentuser.price;
                   
                    console.log("#".repeat(10));
                    // console.log("v"+value);
                    let value =currentuser.cart;
                    value=parseInt(value);
                    value=value+1;
                    cartcount.innerHTML=value;
                    currentuser.cart=value;
                }
            }
            
            // localStorage.setItem("cartcount",cartcount.getAttribute("value"));
            users[currentuser.id]=currentuser;
            localStorage.setItem("users",JSON.stringify(users));
            localStorage.setItem("currentuser",JSON.stringify(currentuser));
            // uldata(currentuser);

        }
    });
}
// ===========================================
function Minus_Prod()
{
    console.log("in");

    minus_buttons.forEach(element => {
        // console.log(element);
        element.onclick=function()
        {
            console.log("#".repeat(10));
            let i=element.getAttribute("id");
            // list of products of current user
            let list=currentuser.products;
            console.log(list);
            // product want to plus
            let x=currentProd[i];
            console.log("#".repeat(10));
            console.log(x);
            for(let i=0;i<list.length;i++)
            {
                if(x.id===list[i].id)
                {
                    list[i].value--;
                    if(list[i].value<=0)
                    {

                        currentuser.price-=parseInt(list[i].price);
                        totalprice1.innerHTML= currentuser.price;
                        let value =currentuser.cart;
                        value=parseInt(value);
                        // value=value+1;
                        value--;
                        cartcount.innerHTML=value;
                        currentuser.cart=value;
                        let a=this.parentNode;
                        let b=a.parentNode;
                        console.log(b);
                        b.classList.add("hidden");
                        currentuser.products.splice(i,1);
                    }
                    else
                    {

                    
                    // console.log("pric"+list[i].price)
                    currentuser.price-=parseInt(list[i].price);
                     let pc=element.nextElementSibling;
                    //  console.log("next"+pc);
                    pc.innerHTML= list[i].value;
                    totalprice1.innerHTML= currentuser.price;
                    let value =currentuser.cart;
                    value=parseInt(value);
                    value=value-1;
                    cartcount.innerHTML=value;
                    currentuser.cart=value;
                    }
                }
            }
            
            localStorage.setItem("cartcount",cartcount.getAttribute("value"));
            users[currentuser.id]=currentuser;
            localStorage.setItem("users",JSON.stringify(users));
            localStorage.setItem("currentuser",JSON.stringify(currentuser));
            // uldata(currentuser);

        }
    });
}
// plus_Prod();
closebtn.onclick=function()
{
    prodCart.classList.toggle("hidden");
}
carticon.onclick=function()
{
    prodCart.classList.toggle("hidden");
}
currentProd=[
    new product(0,"images/imag1.avif","Burger Box","70",0),
    new product(1,"images/imag2.avif","Pizza","100",0),
    new product(2,"images/imag3.avif","Big Box","80",0),
     new product(3,"images/imag6.avif","Break Fast","120",0),
    new product(4,"images/imag4.avif","Box-2","110",0),
    new product(5,"images/imag5.avif","Family Box","90",0)
   
]
function showdata()
{
    logout.classList.toggle("hidden");
}
function getdata()
{
    let arr=window.localStorage.getItem("users");
    if(arr)
    {
        users=JSON.parse(arr);
       
    }
   
    let user=window.localStorage.getItem("currentuser");
    if(user)
    {
        currentuser=JSON.parse(user);
        // console.log(currentuser.name);
       let x= currentuser.products.length;
       console.log(x);
    //    let y=localStorage.getItem("cartcount");
    //    if( y)
    //    {
    //     let z=JSON.parse(y);
    //     console.log("z"+z);
    //     cartcount.setAttribute("value",z);
       
    //    }
    //     else
    //     {
    //         console.log("z");
    //         cartcount.setAttribute("value",0);
          
    //     } 
         cartcount.innerHTML=currentuser.cart;
        for(let i=0;i<x;i++)
            {
                uldata(currentuser.products[i]);
            }
        Hello(currentuser.name);
       
    }

}
function Hello(name1)
{
    let data=document.getElementById("data");
    data.innerHTML= name1;
}

window.onload=function()
{
    // window.localStorage.clear();
    getdata();
    plus_buttons= document.querySelectorAll(".plus");
    minus_buttons= document.querySelectorAll(".minus");
    // console.log(plus_buttons)
    Minus_Prod();
    plus_Prod();
    addToCart();
}
// setInterval(Minus_Prod(),1000);
// setInterval(plus_Prod(),1000);



function addToCart()
{
    
   buttons.forEach(element => {
   
        element.onclick=function()
        {
        //     let value =cartcount.getAttribute("value");
        //    value=parseInt(value);
        //    value=value+1;
        //    cartcount.innerHTML=value;
        //    cartcount.setAttribute("value",value);
        //    localStorage.setItem("cartcount",cartcount.getAttribute("value"));
        // //    cartcount.innerHTML=
           let p_id=element.getAttribute("id");
           addproduct(currentProd[parseInt(p_id)]);
         
        }
   });
//    Minus_Prod();
//    plus_Prod();
}
function uldata(product)
{
    let elemnt=document.createElement("li");
    let img_name=document.createElement("div");
    let img=document.createElement("img");
    img.src=product.imgurl;
    let prodname=document.createElement('p');
    prodname.innerHTML=product.name;
    img_name.classList.add("img-name");
    img_name.append(img);
    img_name.append(prodname);
   let price=document.createElement('p');
   price.innerHTML=product.price;
//   currentuser.price+=parseInt(product.price);
//   users[currentuser.id].price+=parseInt(product.price);
   let Pvalue=document.createElement('div');
   Pvalue.classList.add("Pcount");
   Pvalue.innerHTML=`<i class="fa-solid fa-minus minus" id='${product.id}'></i> <p class="value"> ${product.value} </p><i class="fa-solid fa-plus plus" id='${product.id}'></i>`
   elemnt.classList.add("maindiv");
   elemnt.append(img_name);
   elemnt.append(price);
   elemnt.append(Pvalue);
   products.push(product);
   Prodlist.append(elemnt);
   totalprice1.innerHTML= currentuser.price;
}
function addproduct(product)
{
    let value =currentuser.cart;
           value=parseInt(value);
           value=value+1;
           cartcount.innerHTML=value;
           currentuser.cart=value;

  let totalprice=0;
    let elemnt=document.createElement("li");
    let img_name=document.createElement("div");
    let img=document.createElement("img");
    img.src=product.imgurl;
    let prodname=document.createElement('p');
    prodname.innerHTML=product.name;
    img_name.classList.add("img-name");
    img_name.append(img);
    img_name.append(prodname);
   let price=document.createElement('p');
   price.innerHTML=product.price;
   console.log(price);
  currentuser.price+=parseInt(product.price);
  console.log(currentuser.price);
//   users[currentuser.id].price+=parseInt(product.price);
   let Pvalue=document.createElement('div');
   Pvalue.classList.add("Pcount");
   product.value++;
   Pvalue.innerHTML=`<i class="fa-solid fa-minus minus" id='${product.id}'></i> <p class="value"> ${product.value} </p><i class="fa-solid fa-plus plus" id='${product.id}'></i>`
   elemnt.classList.add("maindiv");
   elemnt.append(img_name);
   elemnt.append(price);
   elemnt.append(Pvalue);
   products.push(product);
   Prodlist.append(elemnt);
//    users[currentuser.id].products.push(product);
   currentuser.products.push(product);
   totalprice1.innerHTML= currentuser.price;
   console.log("*".repeat(10));
   console.log(currentuser);
   console.log(users[currentuser.id]);
   users[currentuser.id]=currentuser;
   console.log("*".repeat(10));
   console.log(currentuser);
   console.log(users[currentuser.id]);
   localStorage.setItem("users",JSON.stringify(users));
   localStorage.setItem("currentuser",JSON.stringify(currentuser));
   
    plus_buttons= document.querySelectorAll(".plus");
    minus_buttons= document.querySelectorAll(".minus");
    Minus_Prod();
    // console.log("xxxxxxxxxxxxx");
    plus_Prod();
}
