const btn = document.querySelector(".btn-black");
btn.addEventListener("click", eiei);

function eiei()
{
    const add = document.createElement("img");
    add.src = "https://media.discordapp.net/attachments/889881822023020575/947832984986329138/IMG_20210705_222137.jpg?width=373&height=473";
    const center = document.querySelector(".center");
    center.appendChild(add);
}