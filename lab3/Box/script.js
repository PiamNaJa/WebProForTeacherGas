function outsidebox() 
{
    const obox = document.querySelector('.boutsidebox');
    obox.classList.remove("boutsidebox");
    obox.classList.add("aoutsidebox");
    outbox.removeEventListener('click', outsidebox);
}
function insidebox() 
{
    const ibox = document.querySelector('.binsidebox');
    ibox.classList.remove("binsidebox");
    ibox.classList.add("ainsidebox");
    inbox.removeEventListener('click', insidebox);
    const obox = document.querySelector('.boutsidebox');
    obox.classList.remove("boutsidebox");
    obox.classList.add("aoutsidebox");
    outbox.removeEventListener('click', outsidebox);
}

const outbox = document.querySelector('.boutsidebox');
outbox.addEventListener('click', outsidebox);

const inbox = document.querySelector('.binsidebox');
inbox.addEventListener('click', insidebox);