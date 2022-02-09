function showD() 
{
    show.removeEventListener('cilck', showD);
    if(show.textContent === "⇓ Hide Detail")
    {
        show.textContent = "⇒ Show Detail";
    }
    else if(show.textContent === "⇒ Show Detail")
    {
        show.textContent = "⇓ Hide Detail";
    }
    const show1 = document.querySelector('.hidden');
    show1.classList.toggle("show");
}

const show = document.querySelector('.word');
show.addEventListener('click', showD);