let number = Math.floor(Math.random() * 101);
let frontnum = 0;
let lastnum = 100;
let player;
while(true)
{
    player = prompt("Guess The Number Between "+ frontnum +" - "+ lastnum);
    player = parseInt(player);
    if(player===number)
    {
        alert("It Correct!\nSecert Number Is " + number);
        break;
    }
    else if(player > frontnum && player < number)
    {
        frontnum = player;
    }
    else if(player < lastnum && player > number)
    {
        lastnum = player;
    }
    else if(player > lastnum || player < frontnum)
    {
        alert("YOU LOSE!\nSecert Number Is " + number);
        break;
    }
}