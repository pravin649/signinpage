var user_name=document.getElementById("user_name")
user_name.addEventListener("input",()=>{
    var input=document.getElementById("user_name").value
    var p1=document.getElementById("p1")
    if(isNaN(input))
    {
        p1.textContent="user name is validated.."
        p1.style.color="green"
    }
    else 
    {
        p1.textContent="error:user name is not validated.."
        p1.style.color="red"
    }
})
var user_mail=document.getElementById("user_mail")
user_mail.addEventListener("focusin",()=>{
    var user_name=document.getElementById("user_name").value
    if(user_name=="" || user_name==null)
    {
        p1.textContent="please enter the username"
        p1.style.color="red"
    }
    else
    {
        p1.textContent=""
    }
})

var new_password=document.getElementById("new_password")
new_password.addEventListener("focusin",()=>{
    var user_name=document.getElementById("user_name").value
    if(user_name=="" || user_name==null)
    {
        p1.textContent="please enter the username"
        p1.style.color="red"
    }
    else
    {
        p1.textContent=""
    }
    var user_mail=document.getElementById("user_mail").value
    if(user_mail=="" || user_mail==null)
    {
        p2.textContent="please enter the mail-id"
        p2.style.color="red"
    }
    else
    {
        p2.textContent=""
    }
})


var confirm_password=document.getElementById("confirm_password")
confirm_password.addEventListener("focusin",()=>{
    var user_name=document.getElementById("user_name").value
    
    if(user_name=="" || user_name==null)
    {
        p1.textContent="please enter the username"
        p1.style.color="red"
    }
    else
    {
        p1.textContent=""
    }

    var user_mail=document.getElementById("user_mail").value

    if(user_mail=="" || user_mail==null)
    {
        p2.textContent="please enter the mail-id"
        p2.style.color="red"
    }
    else
    {
        p2.textContent=""
    }

    var new_password=document.getElementById("new_password").value
    var p3=document.getElementById("p3")

    if(new_password=="" || new_password==null)
    {
        p3.textContent="please enter the new password"
        p3.style.color="red"
    }
    else
    {
        p3.textContent=""
    }
})

var cp=document.getElementById("confirm_password")
cp.addEventListener("focusout",()=>{
    var new_password=document.getElementById("new_password").value
    var confirm_password=document.getElementById("confirm_password").value
    var p4=document.getElementById("p4")

    if(new_password==confirm_password)
    {
        p4.textContent=""
    }
    else
    {
        p4.textContent="* password mismatch"
        p4.style.color="red"
    }
})

var str="saknj asfjp asjdj asljj awoih dlkvn aslfn askba sfhff aksdh";
let arr1=str.split(" ");
console.log();
var find_random=Math.round(Math.random()*arr1.length-1);

var captcha_visible=document.getElementById("captcha_visible");
var cv=captcha_visible.textContent=arr1[find_random];
console.log(cv);

var submit=document.getElementById("submit")
submit.addEventListener("click",()=>{
    var user_name=document.getElementById("user_name").value
    
    var user_mail=document.getElementById("user_mail").value
    
    var new_password=document.getElementById("new_password").value

    var confirm_password=document.getElementById("confirm_password").value

    var captcha_visible=document.getElementById("captcha_visible").value
    console.log(cv);
    var captcha_input=document.getElementById("captcha_input").value
    console.log(captcha_input);
    var p5=document.getElementById("p5")

    if(user_name!="" && user_mail!="" && new_password==confirm_password && new_password!="" && confirm_password!="" && cv==captcha_input)
    {
        p5.textContent="Successfully Submitted..!!"
        p5.style.color="green"
    }
    else
    {
        p5.textContent="*error"
        p5.style.color="red"
    }
})

var submit=document.getElementById("submit")
submit.addEventListener("click",(erase)=>{
    erase.preventDefault()
    
    if(user_name!="" && user_mail!="" && new_password==confirm_password && new_password!="" && confirm_password!="" && captcha_input!=""){
    var user_name=document.getElementById("user_name")
    console.log(user_name.value);
    user_name.value=''

    var user_mail=document.getElementById("user_mail")
    console.log(user_mail.value);
    user_mail.value=''
     
    var new_password=document.getElementById("new_password")
    console.log(new_password.value);
    new_password.value=''

    var confirm_password=document.getElementById("confirm_password")
    console.log(confirm_password.value);
    confirm_password.value=''

    var captcha_input=document.getElementById("captcha_input")
    console.log(captcha_input.value);
    captcha_input.value=''
}
})

