function change()
{
    // const mode = document.querySelector(".light");
    // mode.classList.toggle("dark");
    // const btn = document.querySelector(".btnlight");
    // btn.classList.toggle("btndark");


    const checkbox = document.getElementById("mycheck");
    const mode = document.querySelector(".light");
    mode.style.color = checkbox.checked ? "white" : "black";
}