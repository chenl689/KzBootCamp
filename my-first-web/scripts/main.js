let myh1 = document.querySelector("h1");
let mybutton = document.querySelector("button");
console.log(myh1)
function setname() {
    let myname = prompt("请输入你的名字");
    localStorage.setItem("token",myname);
    myh1.textContent = "Mozilla 酷毙了，"+myname;
}

if (!localStorage.getItem('token'))
{
    setname();
}else
{
    let storeToken=localStorage.getItem("token");
    myh1.textContent = 'Mozilla 酷毙了'+storeToken;
}

mybutton.onclick = function () {
    setname();
}