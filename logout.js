let currentuser="";
function getdata()
{
    
    let user=window.localStorage.getItem("currentuser");
    if(user)
    {
        currentuser=JSON.parse(user);
        
       
    }

}
window.onload=function()
{
    // window.localStorage.clear();
    getdata();
}
function logout()
{
    currentuser.name="";
    currentuser.email="";
    currentuser.password="";
    currentuser.price=0;
    currentuser.product=[];
    localStorage.setItem("currentuser",JSON.stringify(currentuser));
}