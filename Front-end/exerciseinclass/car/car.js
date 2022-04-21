// const box1 = document.querySelector(".box__1");
// const box2 = document.querySelector(".box__2");
// const box3 = document.querySelector(".box__3");
// const box4 = document.querySelector(".box__4");
// const box5 = document.querySelector(".box__5");

// box1.addEventListener("click", remove);
// box2.addEventListener("click", remove);
// box3.addEventListener("click", remove);
// box4.addEventListener("click", remove);
// box5.addEventListener("click", remove);
const box = document.querySelectorAll(".box");
for(let i =0 ; i<box.length; i++)
{
    box[i].addEventListener("click", remove);
}

function remove(event)
{
    // if(event.currentTarget == box1)
    // {
    //     box1.classList.add("hidden");
    // }
    // if(event.currentTarget == box2)
    // {
    //     box2.classList.add("hidden");
    // }
    // if(event.currentTarget == box3)
    // {
    //     box3.classList.add("hidden");
    // }
    // if(event.currentTarget == box4)
    // {
    //     box4.classList.add("hidden");
    // }
    // if(event.currentTarget == box5)
    // {
    //     box5.classList.add("hidden");
    // }
    event.currentTarget.classList.add("hidden");
}