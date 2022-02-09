function b1()
{
    if(visit[1] === false)
    {
        if(turn === 'X')
        {
            block1.innerHTML = turn;
            record[1] = turn;
            turn = 'O';
        }
        else if(turn === 'O')
        {
            block1.innerHTML = turn;
            record[1] = turn;
            turn = 'X';
        }
        visit[1] = true;
        let index = numlist.indexOf(1);
        numlist.splice(index,1);
        round++;
        checkwin();
        random();
    }
    block1.removeEventListener('click', b1);
}
function b2()
{
    if(visit[2] === false)
    {
        if(turn === 'X')
        {
            block2.innerHTML = turn;
            record[2] = turn;
            turn = 'O';
        }
        else if(turn === 'O')
        {
            block2.innerHTML = turn;
            record[2] = turn;
            turn = 'X';
        }
        visit[2] = true;
        let index = numlist.indexOf(2);
        numlist.splice(index,1);
        round++;
        checkwin();
        random();
    }
    block2.removeEventListener('click', b2);
}
function b3()
{
    if(visit[3] === false)
    {
        if(turn === 'X')
        {
            block3.innerHTML = turn;
            record[3] = turn;
            turn = 'O';
        }
        else if(turn === 'O')
        {
            block3.innerHTML = turn;
            record[3] = turn;
            turn = 'X';
        }
        visit[3] = true;
        let index = numlist.indexOf(3);
        numlist.splice(index,1);
        round++;
        checkwin();
        random();
    }
    block3.removeEventListener('click', b3);
}
function b4()
{
    if(visit[4] === false)
    {
        if(turn === 'X')
        {
            block4.innerHTML = turn;
            record[4] = turn;
            turn = 'O';
        }
        else if(turn === 'O')
        {
            block4.innerHTML = turn;
            record[4] = turn;
            turn = 'X';
        }
        visit[4] = true;
        let index = numlist.indexOf(4);
        numlist.splice(index,1);
        round++;
        checkwin();
        random();
    }
    block4.removeEventListener('click', b4);
}
function b5()
{
    if(visit[5] === false)
    {
        if(turn === 'X')
        {
            block5.innerHTML = turn;
            record[5] = turn;
            turn = 'O';
        }
        else if(turn === 'O')
        {
            block5.innerHTML = turn;
            record[5] = turn;
            turn = 'X';
        }
        visit[5] = true;
        let index = numlist.indexOf(5);
        numlist.splice(index,1);
        round++;
        checkwin();
        random();
    }
    block5.removeEventListener('click', b5);
}
function b6()
{
    if(visit[6] === false)
    {
        if(turn === 'X')
        {
            block6.innerHTML = turn;
            record[6] = turn;
            turn = 'O';
        }
        else if(turn === 'O')
        {
            block6.innerHTML = turn;
            record[6] = turn;
            turn = 'X';
        }
        visit[6] = true;
        let index = numlist.indexOf(6);
        numlist.splice(index,1);
        round++;
        checkwin();
        random();
    }
    block6.removeEventListener('click', b6);
}
function b7()
{
    if(visit[7] === false)
    {
        if(turn === 'X')
        {
            block7.innerHTML = turn;
            record[7] = turn;
            turn = 'O';
        }
        else if(turn === 'O')
        {
            block7.innerHTML = turn;
            record[7] = turn;
            turn = 'X';
        }
        visit[7] = true;
        let index = numlist.indexOf(7);
        numlist.splice(index,1);
        round++;
        checkwin();
        random();
    }
    block7.removeEventListener('click', b7);
}
function b8()
{
    if(visit[8] === false)
    {
        if(turn === 'X')
        {
            block8.innerHTML = turn;
            record[8] = turn;
            turn = 'O';
        }
        else if(turn === 'O')
        {
            block8.innerHTML = turn;
            record[8] = turn;
            turn = 'X';
        }
        visit[8] = true;
        let index = numlist.indexOf(8);
        numlist.splice(index,1);
        round++;
        checkwin();
        random();
    }
    block8.removeEventListener('click', b8);
}
function b9()
{
    if(visit[9] === false)
    {
        if(turn === 'X')
        {
            block9.innerHTML = turn;
            record[9] = turn;
            turn = 'O';
        }
        else if(turn === 'O')
        {
            block9.innerHTML = turn;
            record[9] = turn;
            turn = 'X';
        }
        visit[9] = true;
        let index = numlist.indexOf(9);
        numlist.splice(index,1);
        round++;
        checkwin();
        random();
    }
    block9.removeEventListener('click', b9);
}
function random()
{
    while(true)
    {
        let num = numlist[Math.floor(Math.random()*numlist.length)];
        if(num === undefined) break;
        let index = numlist.indexOf(num);
        numlist.splice(index,1);
        if(num === 1)
        {
            if(visit[1] === false)
            {
                if(turn === 'X')
                {
                    block1.innerHTML = turn;
                    record[1] = turn;
                    turn = 'O';
                }
                else if(turn === 'O')
                {
                    block1.innerHTML = turn;
                    record[1] = turn;
                    turn = 'X';
                }
                block1.removeEventListener('click', b1);
                visit[1] = true;
                round++;
                checkwin();
                break;
            }
        }
        else if(num === 2)
        {
            if(visit[2] === false)
            {
                if(turn === 'X')
                {
                    block2.innerHTML = turn;
                    record[2] = turn;
                    turn = 'O';
                }
                else if(turn === 'O')
                {
                    block2.innerHTML = turn;
                    record[2] = turn;
                    turn = 'X';
                }
                block2.removeEventListener('click', b2);
                visit[2] = true;
                round++;
                checkwin();
                break;
            }
        }
        else if(num === 3)
        {
            if(visit[3] === false)
            {
                if(turn === 'X')
                {
                    block3.innerHTML = turn;
                    record[3] = turn;
                    turn = 'O';
                }
                else if(turn === 'O')
                {
                    block3.innerHTML = turn;
                    record[3] = turn;
                    turn = 'X';
                }
                block3.removeEventListener('click', b3);
                visit[3] = true;
                round++;
                checkwin();
                break;
            }
        }
        else if(num === 4)
        {
            if(visit[4] === false)
            {
                if(turn === 'X')
                {
                    block4.innerHTML = turn;
                    record[4] = turn;
                    turn = 'O';
                }
                else if(turn === 'O')
                {
                    block4.innerHTML = turn;
                    record[4] = turn;
                    turn = 'X';
                }
                block4.removeEventListener('click', b4);
                visit[4] = true;
                round++;
                checkwin();
                break;
            }
        }
        else if(num === 5)
        {
            if(visit[5] === false)
            {
                if(turn === 'X')
                {
                    block5.innerHTML = turn;
                    record[5] = turn;
                    turn = 'O';
                }
                else if(turn === 'O')
                {
                    block5.innerHTML = turn;
                    record[5] = turn;
                    turn = 'X';
                }
                block5.removeEventListener('click', b5);
                visit[5] = true;
                round++;
                checkwin();
                break;
            }
        }
        else if(num === 6)
        {
            if(visit[6] === false)
            {
                if(turn === 'X')
                {
                    block6.innerHTML = turn;
                    record[6] = turn;
                    turn = 'O';
                }
                else if(turn === 'O')
                {
                    block6.innerHTML = turn;
                    record[6] = turn;
                    turn = 'X';
                }
                block6.removeEventListener('click', b6);
                visit[6] = true;
                round++;
                checkwin();
                break;
            }
        }
        else if(num === 7)
        {
            if(visit[7] === false)
            {
                if(turn === 'X')
                {
                    block7.innerHTML = turn;
                    record[7] = turn;
                    turn = 'O';
                }
                else if(turn === 'O')
                {
                    block7.innerHTML = turn;
                    record[7] = turn;
                    turn = 'X';
                }
                block7.removeEventListener('click', b7);
                visit[7] = true;
                round++;
                checkwin();
                break;
            }
        }
        else if(num === 8)
        {
            if(visit[8] === false)
            {
                if(turn === 'X')
                {
                    block8.innerHTML = turn;
                    record[8] = turn;
                    turn = 'O';
                }
                else if(turn === 'O')
                {
                    block8.innerHTML = turn;
                    record[8] = turn;
                    turn = 'X';
                }
                block8.removeEventListener('click', b8);
                visit[8] = true;
                round++;
                checkwin();
                break;
            }
        }
        else if(num === 9)
        {
            if(visit[9] === false)
            {
                if(turn === 'X')
                {
                    block9.innerHTML = turn;
                    record[9] = turn;
                    turn = 'O';
                }
                else if(turn === 'O')
                {
                    block9.innerHTML = turn;
                    record[9] = turn;
                    turn = 'X';
                }
                block9.removeEventListener('click', b9);
                visit[9] = true;
                round++;
                checkwin();
                break;
            }
        }
    }
}
function removeallLisener()
{
    block1.removeEventListener('click', b1);
    block2.removeEventListener('click', b2);
    block3.removeEventListener('click', b3);
    block4.removeEventListener('click', b4);
    block5.removeEventListener('click', b5);
    block6.removeEventListener('click', b6);
    block7.removeEventListener('click', b7);
    block8.removeEventListener('click', b8);
    block9.removeEventListener('click', b9);
    for(let i = 1 ; i<=9; i++)
    {
        visit[i] = true;
    }
}
function checkwin()
{
    if(record[1] === 'O' && record[2] === 'O' && record[3] === 'O')
    {
        owin();
        removeallLisener();
    }
    else if(record[1] === 'X' && record[2] === 'X' && record[3] === 'X')
    {
        xwin();
        removeallLisener();
    }
    else if(record[4] === 'O' && record[5] === 'O' && record[6] === 'O')
    {
        owin();
        removeallLisener();
    }
    else if(record[4] === 'X' && record[5] === 'X' && record[6] === 'X')
    {
        xwin();
        removeallLisener();
    }
    else if(record[7] === 'O' && record[8] === 'O' && record[9] === 'O')
    {
        owin();
        removeallLisener();
    }
    else if(record[7] === 'X' && record[8] === 'X' && record[9] === 'X')
    {
        xwin();
        removeallLisener();
    }

    else if(record[1] === 'X' && record[4] === 'X' && record[7] === 'X')
    {
        xwin();
        removeallLisener();
    }
    else if(record[1] === 'O' && record[4] === 'O' && record[7] === 'O')
    {
        owin();
        removeallLisener();
    }
    else if(record[2] === 'X' && record[5] === 'X' && record[8] === 'X')
    {
        xwin();
        removeallLisener();
    }
    else if(record[2] === 'O' && record[5] === 'O' && record[8] === 'O')
    {
        owin();
        removeallLisener();
    }
    else if(record[3] === 'X' && record[6] === 'X' && record[9] === 'X')
    {
        xwin();
        removeallLisener();
    }
    else if(record[3] === 'O' && record[6] === 'O' && record[9] === 'O')
    {
        owin();
        removeallLisener();
    }

    else if(record[1] === 'O' && record[5] === 'O' && record[9] === 'O')
    {
        owin();
        removeallLisener();
    }
    else if(record[1] === 'X' && record[5] === 'X' && record[9] === 'X')
    {
        xwin();
        removeallLisener();
    }
    else if(record[3] === 'O' && record[5] === 'O' && record[7] === 'O')
    {
        owin();
        removeallLisener();
    }
    else if(record[3] === 'X' && record[5] === 'X' && record[7] === 'X')
    {
        xwin();
        removeallLisener();
    }
    else if(round === 9)
    {
        const tie = document.createElement('p');
        tie.style.color = 'darkorange';
        tie.textContent = 'Tie';
        const board = document.querySelector('h1')
        board.appendChild(tie);
    }
}
function xwin()
{
    const xwin = document.createElement('p');
    xwin.style.color = 'green';
    xwin.textContent = 'X Win';
    const board = document.querySelector('h1')
    board.appendChild(xwin);
}
function owin()
{
    const owin = document.createElement('p');
    owin.style.color = 'red';
    owin.textContent = 'O Win';
    const board = document.querySelector('h1')
    board.appendChild(owin);
}
let visit = [false,false,false,false,false,false,false,false,false,false];
let numlist = [1,2,3,4,5,6,7,8,9];
let turn = 'X';
let record = [];
let round = 0;
const block1 = document.querySelector('#item1');
block1.addEventListener('click', b1);

const block2 = document.querySelector('#item2');
block2.addEventListener('click', b2);

const block3 = document.querySelector('#item3');
block3.addEventListener('click', b3);

const block4 = document.querySelector('#item4');
block4.addEventListener('click', b4);

const block5 = document.querySelector('#item5');
block5.addEventListener('click', b5);

const block6 = document.querySelector('#item6');
block6.addEventListener('click', b6);

const block7 = document.querySelector('#item7');
block7.addEventListener('click', b7);

const block8 = document.querySelector('#item8');
block8.addEventListener('click', b8);

const block9 = document.querySelector('#item9');
block9.addEventListener('click', b9);