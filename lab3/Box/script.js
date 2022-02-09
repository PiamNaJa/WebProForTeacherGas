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

function reset()
{
    const obox = document.querySelector('.aoutsidebox');
    obox.classList.remove("aoutsidebox");
    obox.classList.add("boutsidebox");
    outbox.addEventListener('click', outsidebox);

    const ibox = document.querySelector('.ainsidebox');
    ibox.classList.remove("ainsidebox");
    ibox.classList.add("binsidebox");
    inbox.addEventListener('click', insidebox);
}
const outbox = document.querySelector('.boutsidebox');
outbox.addEventListener('click', outsidebox);

const inbox = document.querySelector('.binsidebox');
inbox.addEventListener('click', insidebox);

const button = document.querySelector('button');
button.addEventListener('click', reset);