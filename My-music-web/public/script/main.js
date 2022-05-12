const mainaudio = new Audio('/demo/Babymetal/GimmeChocolate!!.mp3');
const audiocontrolplaybt = document.getElementById('audio--control--playbt');
const audiopath = document.querySelectorAll('#audiopath');
const playbtn = document.querySelectorAll('#btnplay');
mainaudio.volume = 0.008;

audiocontrolplaybt.onclick = ()=>{
    if(mainaudio.paused)
    {
        mainaudio.play();
        audiocontrolplaybt.classList.replace('fa-play', 'fa-pause')
    }
    else
    {
        mainaudio.pause();
        audiocontrolplaybt.classList.replace('fa-pause', 'fa-play')
    }
}
for(let i = 0; i< playbtn.length; i++)
{
    playbtn[i].onclick = ()=>{
        const path = window.location.protocol + "//" + window.location.host + audiopath[i].getAttribute('data-audio');
        if(mainaudio.src !==  path)
        {
            mainaudio.src = audiopath[i].getAttribute('data-audio');
            mainaudio.play();
            if(playbtn[i].classList.contains('fa-play'))
            {
                playbtn[i].classList.replace('fa-play', 'fa-pause')
            }
            else if(playbtn[i].classList.contains('fa-circle-play'))
            {
                playbtn[i].classList.replace('fa-circle-play', 'fa-circle-pause')
            }
            audiocontrolplaybt.classList.replace('fa-play', 'fa-pause')
            for(let j = 0; j< playbtn.length; j++)
            {
                if(j!==i)
                {
                    if(playbtn[j].classList.contains('fa-pause'))
                    {
                        playbtn[j].classList.replace('fa-pause', 'fa-play')
                    }
                    else if(playbtn[j].classList.contains('fa-circle-pause'))
                    {
                        playbtn[j].classList.replace('fa-circle-pause', 'fa-circle-play')
                    }        
                }          
            }
        }
        else
        {
            if(mainaudio.paused)
            {
                mainaudio.play();
                if(playbtn[i].classList.contains('fa-play'))
                {
                    playbtn[i].classList.replace('fa-play', 'fa-pause')
                }
                else if(playbtn[i].classList.contains('fa-circle-play'))
                {
                    playbtn[i].classList.replace('fa-circle-play', 'fa-circle-pause')
                }
                audiocontrolplaybt.classList.replace('fa-play', 'fa-pause')                
            }
            else
            {
                mainaudio.pause();
                if(playbtn[i].classList.contains('fa-pause'))
                {
                    playbtn[i].classList.replace('fa-pause', 'fa-play')
                }
                else if(playbtn[i].classList.contains('fa-circle-pause'))
                {
                    playbtn[i].classList.replace('fa-circle-pause', 'fa-circle-play')
                }
                audiocontrolplaybt.classList.replace('fa-pause', 'fa-play')                
            }
        }
    }
}
// const songpageaudio = document.querySelector('#songpageaudio');
// const songpageplaybtn = document.querySelector('#songpagebtnplay');
// songpageplaybtn.onclick = ()=>{
//     if(songpageaudio.paused)
//     {
//         songpageaudio.play();
//         songpageplaybtn.classList.remove('fa-circle-play');
//         songpageplaybtn.classList.add('fa-circle-pause');
//     }
//     else
//     {
//         songpageaudio.pause();
//         songpageaudio.currentTime = 0
//         songpageplaybtn.classList.remove('fa-circle-pause');
//         songpageplaybtn.classList.add('fa-circle-play')
//     }
// }

function albumsongrowhover()
{
    const albumsongrow      = document.querySelectorAll('.album-song-row'),
          playbtinrow       = document.querySelectorAll('.playbt--inrow'),
          favbtinrow        = document.querySelectorAll('.favbt--inrow'),
          addplaylistinrow  = document.querySelectorAll('.addplaylist--inrow');

    for(let i = 0; i<albumsongrow .length; i++)
    {
        albumsongrow[i].addEventListener('mouseover', ()=>{
            playbtinrow[i].style.visibility         = "visible"
            favbtinrow[i].style.visibility          = "visible"
            addplaylistinrow[i].style.visibility    = "visible"
        });

        albumsongrow[i].addEventListener('mouseout', ()=>{
            playbtinrow[i].style.visibility         = "hidden"
            favbtinrow[i].style.visibility          = "hidden"
            addplaylistinrow[i].style.visibility    = "hidden"
        });
    }
}

function artistsongrowhover()
{
    const artistsongrow      = document.querySelectorAll('.artist-song-row'),
          playbtinrow       = document.querySelectorAll('.playbt--inrow'),
          favbtinrow        = document.querySelectorAll('.favbt--inrow'),
          addplaylistinrow  = document.querySelectorAll('.addplaylist--inrow');

    for(let i = 0; i<artistsongrow.length; i++)
    {
        artistsongrow[i].addEventListener('mouseover', ()=>{
            playbtinrow[i].style.visibility         = "visible"
            favbtinrow[i].style.visibility          = "visible"
            addplaylistinrow[i].style.visibility    = "visible"
        });

        artistsongrow[i].addEventListener('mouseout', ()=>{
            playbtinrow[i].style.visibility         = "hidden"
            favbtinrow[i].style.visibility          = "hidden"
            addplaylistinrow[i].style.visibility    = "hidden"
        });
    }
}
function songsiderowhover()
{
    const songsiderow      = document.querySelectorAll('.songside__row'),
          playbtinrow       = document.querySelectorAll('.playbt--inrow'),
          favbtinrow        = document.querySelectorAll('.favbt--inrow'),
          addplaylistinrow  = document.querySelectorAll('.addplaylist--inrow');

    for(let i = 0; i<songsiderow.length; i++)
    {
        songsiderow[i].addEventListener('mouseover', ()=>{
            playbtinrow[i].style.visibility         = "visible"
            favbtinrow[i].style.visibility          = "visible"
            addplaylistinrow[i].style.visibility    = "visible"
        });

        songsiderow[i].addEventListener('mouseout', ()=>{
            playbtinrow[i].style.visibility         = "hidden"
            favbtinrow[i].style.visibility          = "hidden"
            addplaylistinrow[i].style.visibility    = "hidden"
        });
    }
}

function searchsongrow()
{
    const albumsongrow      = document.querySelectorAll('.search-song__row'),
          playbtinrow       = document.querySelectorAll('.playbt--inrow'),
          favbtinrow        = document.querySelectorAll('.favbt--inrow'),
          addplaylistinrow  = document.querySelectorAll('.addplaylist--inrow');

    for(let i = 0; i<albumsongrow .length; i++)
    {
        albumsongrow[i].addEventListener('mouseover', ()=>{
            playbtinrow[i].style.visibility         = "visible"
            favbtinrow[i].style.visibility          = "visible"
            addplaylistinrow[i].style.visibility    = "visible"
        });

        albumsongrow[i].addEventListener('mouseout', ()=>{
            playbtinrow[i].style.visibility         = "hidden"
            favbtinrow[i].style.visibility          = "hidden"
            addplaylistinrow[i].style.visibility    = "hidden"
        });
    }
}

function playlistsongrowhover()
{
    const playlistsongrow      = document.querySelectorAll('.playlist-song-row'),
          playbtinrow       = document.querySelectorAll('.playbt--inrow'),
          favbtinrow        = document.querySelectorAll('.favbt--inrow'),
          rmfromplaylistinrow  = document.querySelectorAll('.rmfromplaylist--inrow');

    for(let i = 0; i<playlistsongrow.length; i++)
    {
        playlistsongrow[i].addEventListener('mouseover', ()=>{
            playbtinrow[i].style.visibility         = "visible"
            favbtinrow[i].style.visibility          = "visible"
            rmfromplaylistinrow[i].style.visibility = "visible"
        });

        playlistsongrow[i].addEventListener('mouseout', ()=>{
            playbtinrow[i].style.visibility         = "hidden"
            favbtinrow[i].style.visibility          = "hidden"
            rmfromplaylistinrow[i].style.visibility = "hidden"
        });
    }
}

function userfavsongrowhover()
{
    const userfavsongrow      = document.querySelectorAll('.user-favsong-row'),
          playbtinrow       = document.querySelectorAll('.playbt--inrow'),
          favbtinrow        = document.querySelectorAll('.unfavbt--inrow'),
          addplaylistinrow  = document.querySelectorAll('.addplaylist--inrow');

    for(let i = 0; i<userfavsongrow.length; i++)
    {
        userfavsongrow[i].addEventListener('mouseover', ()=>{
            playbtinrow[i].style.visibility         = "visible"
            favbtinrow[i].style.visibility          = "visible"
            addplaylistinrow[i].style.visibility    = "visible"
        });

        userfavsongrow[i].addEventListener('mouseout', ()=>{
            playbtinrow[i].style.visibility         = "hidden"
            favbtinrow[i].style.visibility          = "hidden"
            addplaylistinrow[i].style.visibility    = "hidden"
        });
    }
}

function othersongblockhover()
{
    const othersongblock      = document.querySelectorAll('.othersong__block'),
          playbtinrow       = document.querySelectorAll('.playbt--inrow');

    for(let i = 0; i<othersongblock.length; i++)
    {
        othersongblock[i].addEventListener('mouseover', ()=>{
            playbtinrow[i].style.visibility         = "visible";
        });

        othersongblock[i].addEventListener('mouseout', ()=>{
            playbtinrow[i].style.visibility         = "hidden";
        });
    }
}