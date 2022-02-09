function b1()
{
    if(!visit[1])
    {
        if(turn === 'X')
        {
            block1.innerHTML = turn;
            turn = 'O';
        }
        else if(turn === 'O')
        {
            block1.innerHTML = turn;
            turn = 'X';
        }
        visit[1] = true;
        random();
    }
    block1.removeEventListener('click', b1);
}
function b2()
{
    if(!visit[2])
    {
        if(turn === 'X')
        {
            block2.innerHTML = turn;
            turn = 'O';
        }
        else if(turn === 'O')
        {
            block2.innerHTML = turn;
            turn = 'X';
        }
        visit[2] = true;
        random();
    }
    block2.removeEventListener('click', b2);
}
function b3()
{
    if(!visit[3])
    {
        if(turn === 'X')
        {
            block3.innerHTML = turn;
            turn = 'O';
        }
        else if(turn === 'O')
        {
            block3.innerHTML = turn;
            turn = 'X';
        }
        visit[3] = true;
        random();
    }
    block3.removeEventListener('click', b3);
}
function b4()
{
    if(!visit[4])
    {
        if(turn === 'X')
        {
            block4.innerHTML = turn;
            turn = 'O';
        }
        else if(turn === 'O')
        {
            block4.innerHTML = turn;
            turn = 'X';
        }
        visit[4] = true;
        random();
    }
    block4.removeEventListener('click', b4);
}
function b5()
{
    if(!visit[5])
    {
        if(turn === 'X')
        {
            block5.innerHTML = turn;
            turn = 'O';
        }
        else if(turn === 'O')
        {
            block5.innerHTML = turn;
            turn = 'X';
        }
        visit[5] = true;
        random();
    }
    block5.removeEventListener('click', b5);
}
function b6()
{
    if(!visit[6])
    {
        if(turn === 'X')
        {
            block6.innerHTML = turn;
            turn = 'O';
        }
        else if(turn === 'O')
        {
            block6.innerHTML = turn;
            turn = 'X';
        }
        visit[6] = true;
        random();
    }
    block6.removeEventListener('click', b6);
}
function b7()
{
    if(turn === 'X')
    {
        block7.innerHTML = turn;
        turn = 'O';
    }
    else if(turn === 'O')
    {
        block7.innerHTML = turn;
        turn = 'X';
    }
    visit[7] = true;
    block7.removeEventListener('click', b7);
    random();
}
function b8()
{
    if(!visit[8])
    {
        if(turn === 'X')
        {
            block8.innerHTML = turn;
            turn = 'O';
        }
        else if(turn === 'O')
        {
            block8.innerHTML = turn;
            turn = 'X';
        }
        visit[8] = true;
        random();
    }
    block8.removeEventListener('click', b8);
}
function b9()
{
    if(!visit[9])
    {
        if(turn === 'X')
        {
            block9.innerHTML = turn;
            turn = 'O';
        }
        else if(turn === 'O')
        {
            block9.innerHTML = turn;
            turn = 'X';
        }
        visit[9] = true;
        random();
    }
    block9.removeEventListener('click', b9);
}
function random()
{
    while(true)
    {
        let num = numlist[Math.floor(Math.random()*numlist.length)];
        console.log(num);
        if(num === 1)
        {
            if(!visit[1])
            {
                if(turn === 'X')
                {
                    block1.innerHTML = turn;
                    turn = 'O';
                }
                else if(turn === 'O')
                {
                    block1.innerHTML = turn;
                    turn = 'X';
                }
                block1.removeEventListener('click', b1);
                break;
            }
        }
        else if(num === 2)
        {
            if(!visit[2])
            {
                if(turn === 'X')
                {
                    block2.innerHTML = turn;
                    turn = 'O';
                }
                else if(turn === 'O')
                {
                    block2.innerHTML = turn;
                    turn = 'X';
                }
                block2.removeEventListener('click', b2);
                break;
            }
        }
        else if(num === 3)
        {
            if(!visit[3])
            {
                if(turn === 'X')
                {
                    block3.innerHTML = turn;
                    turn = 'O';
                }
                else if(turn === 'O')
                {
                    block3.innerHTML = turn;
                    turn = 'X';
                }
                block3.removeEventListener('click', b3);
                break;
            }
        }
        else if(num === 4)
        {
            if(!visit[4])
            {
                if(turn === 'X')
                {
                    block4.innerHTML = turn;
                    turn = 'O';
                }
                else if(turn === 'O')
                {
                    block4.innerHTML = turn;
                    turn = 'X';
                }
                block4.removeEventListener('click', b4);
                break;
            }
        }
        else if(num === 5)
        {
            if(!visit[5])
            {
                if(turn === 'X')
                {
                    block5.innerHTML = turn;
                    turn = 'O';
                }
                else if(turn === 'O')
                {
                    block5.innerHTML = turn;
                    turn = 'X';
                }
                block5.removeEventListener('click', b5);
                break;
            }
        }
        else if(num === 6)
        {
            if(!visit[6])
            {
                if(turn === 'X')
                {
                    block6.innerHTML = turn;
                    turn = 'O';
                }
                else if(turn === 'O')
                {
                    block6.innerHTML = turn;
                    turn = 'X';
                }
                block6.removeEventListener('click', b6);
                break;
            }
        }
        else if(num === 7)
        {
            if(!visit[7])
            {
                if(turn === 'X')
                {
                    block7.innerHTML = turn;
                    turn = 'O';
                }
                else if(turn === 'O')
                {
                    block7.innerHTML = turn;
                    turn = 'X';
                }
                block7.removeEventListener('click', b7);
                break;
            }
        }
        else if(num === 8)
        {
            if(!visit[8])
            {
                if(turn === 'X')
                {
                    block8.innerHTML = turn;
                    turn = 'O';
                }
                else if(turn === 'O')
                {
                    block8.innerHTML = turn;
                    turn = 'X';
                }
                block8.removeEventListener('click', b8);
                break;
            }
        }
        else if(num === 9)
        {
            if(!visit[9])
            {
                if(turn === 'X')
                {
                    block9.innerHTML = turn;
                    turn = 'O';
                }
                else if(turn === 'O')
                {
                    block9.innerHTML = turn;
                    turn = 'X';
                }
                block9.removeEventListener('click', b9);
                break;
            }
        }
    }
}
let visit = [false,false,false,false,false,false,false,false,false,false];
let numlist = [1,2,3,4,5,6,7,8,9];
let turn = 'X';
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