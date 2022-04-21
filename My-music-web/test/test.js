const pass = document.getElementById("password");
const repass = document.getElementById("repassword");
const form = document.getElementById("form");



form.addEventListener("submit", (e)=>{
    e.preventDefault();
    check();
})

function check()
{

    if(document.getElementById("password").value === document.getElementById("repassword").value)
    {
        console.log("true");
    }
    else
    {
        console.log("false");
    }
}