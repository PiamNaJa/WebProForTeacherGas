const mainbox = document.querySelector(".mainbox");
mainbox.addEventListener("click", function()
{
    const box = document.querySelectorAll(".insidebox");
    for(let i =0; i< box.length;i++)
    {
        box[i].classList.toggle("black");
        
    }
});