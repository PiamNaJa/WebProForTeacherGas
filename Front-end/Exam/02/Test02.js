function Input()
{
    let create = document.querySelector(".header__todolist");
    let img = document.createElement("img");
    let content = document.createElement("p");
    content.textContent = document.getElementById("input").value;
    img.src = "https://www.iconpacks.net/icons/1/free-trash-icon-347-thumb.png";
    content.appendChild(img);
    create.appendChild(content);
    let d = document.querySelectorAll("img");
    for(let i = 0 ; i<d.length;i++)
    {
        d[i].addEventListener("click", function ()
        {
           let parent = this.parentNode;
           parent.remove();
        })
    }
    let p = document.querySelectorAll("p");
    for(let i = 0 ; i<p.length;i++)
    {
        p[i].addEventListener("click", line);
    }
}
function line(event)
{
    event.currentTarget.classList.toggle("line");
}