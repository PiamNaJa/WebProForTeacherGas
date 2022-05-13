const mainaudio = new Audio('/demo/Babymetal/GimmeChocolate!!.mp3');
const audiocontainer = {
    playbt      : document.getElementById('audio--control--playbt'),
    currentTime : document.querySelector('.songcurrenttime'),
    duration    : document.querySelector('.songduration'),
    slider      : document.querySelector('.progress-slider'),
    volume      : document.querySelector('.volume-slider'),
    img         : document.querySelector('.audiocontainer--img'),
    songname    : document.querySelector('.audiocontainer--name'),
    artistname  : document.querySelector('.audiocontainer--artist')
};
const songdata  = document.querySelectorAll('#songdata');
const playbtn   = document.querySelectorAll('#btnplay');
let currentBt;
mainaudio.volume = 0.008;

function showCurrentTime()
{
    let currentMin = Math.floor(mainaudio.currentTime/60);
    let currentSec = Math.floor(mainaudio.currentTime) - currentMin*60;
    audiocontainer.currentTime.textContent = currentMin + ":" + currentSec.toLocaleString('en-us', {minimumIntegerDigits:2, useGrouping:false});
    audiocontainer.slider.value = mainaudio.currentTime;
    if(Math.floor(audiocontainer.slider.value) === Math.floor(mainaudio.duration))
    {
        clearInterval();
        audiocontainer.playbt.classList.replace('fa-pause', 'fa-play');
    }
    setDuration();
}

function setDuration(index)
{
    let durationMin = Math.floor(Math.floor(mainaudio.duration)/60);
    let durationSec =  Math.floor(mainaudio.duration) - durationMin*60;
    audiocontainer.duration.textContent = durationMin + ":" + durationSec.toLocaleString('en-us', {minimumIntegerDigits:2, useGrouping:false});   
    audiocontainer.slider.max = mainaudio.duration; 
    audiocontainer.slider.disabled = false;
    if(index !== undefined)
    {
        audiocontainer.img.src = songdata[index].getAttribute('data-img');
        audiocontainer.songname.textContent = songdata[index].getAttribute('data-song');
        audiocontainer.artistname.textContent = songdata[index].getAttribute('data-artist');
    }
}

audiocontainer.slider.addEventListener('change', ()=>{
    mainaudio.currentTime = audiocontainer.slider.value;
    clearInterval();
    showCurrentTime();
    setInterval(showCurrentTime, 1000)
})

audiocontainer.volume.addEventListener('input', ()=>{
    mainaudio.volume = audiocontainer.volume.value;
})

audiocontainer.playbt.onclick = ()=>{
    if(mainaudio.paused)
    {
        mainaudio.play();
        setDuration();
        setInterval(showCurrentTime, 1000)
        audiocontainer.playbt.classList.replace('fa-play', 'fa-pause')
        if(currentBt)
        {
            if(currentBt.classList.contains('fa-play'))
            {
                currentBt.classList.replace('fa-play', 'fa-pause')
            }
            else if(currentBt.classList.contains('fa-circle-play'))
            {
                currentBt.classList.replace('fa-circle-play', 'fa-circle-pause')
            }
        }        
    }
    else
    {
        mainaudio.pause();
        clearInterval();
        audiocontainer.playbt.classList.replace('fa-pause', 'fa-play')
        if(currentBt)
        {
            if(currentBt.classList.contains('fa-pause'))
            {
                currentBt.classList.replace('fa-pause', 'fa-play')
            }
            else if(currentBt.classList.contains('fa-circle-pause'))
            {
                currentBt.classList.replace('fa-circle-pause', 'fa-circle-play')
            }
        }
        audiocontainer.playbt.classList.replace('fa-pause', 'fa-play')            
    }
}
for(let i = 0; i< playbtn.length; i++)
{
    playbtn[i].onclick = ()=>{
        const path = window.location.protocol + "//" + window.location.host + songdata[i].getAttribute('data-audio');
        if(mainaudio.src !==  path)
        {
            mainaudio.src = songdata[i].getAttribute('data-audio');
            mainaudio.play();
            setDuration(i);
            setInterval(showCurrentTime, 1000);
            currentBt = playbtn[i];
            if(playbtn[i].classList.contains('fa-play'))
            {
                playbtn[i].classList.replace('fa-play', 'fa-pause')
            }
            else if(playbtn[i].classList.contains('fa-circle-play'))
            {
                playbtn[i].classList.replace('fa-circle-play', 'fa-circle-pause')
            }
            audiocontainer.playbt.classList.replace('fa-play', 'fa-pause')
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
                setDuration();
                setInterval(showCurrentTime, 1000)
                currentBt = playbtn[i];
                if(playbtn[i].classList.contains('fa-play'))
                {
                    playbtn[i].classList.replace('fa-play', 'fa-pause')
                }
                else if(playbtn[i].classList.contains('fa-circle-play'))
                {
                    playbtn[i].classList.replace('fa-circle-play', 'fa-circle-pause')
                }
                audiocontainer.playbt.classList.replace('fa-play', 'fa-pause')                
            }
            else
            {
                mainaudio.pause();
                clearInterval();
                if(playbtn[i].classList.contains('fa-pause'))
                {
                    playbtn[i].classList.replace('fa-pause', 'fa-play')
                }
                else if(playbtn[i].classList.contains('fa-circle-pause'))
                {
                    playbtn[i].classList.replace('fa-circle-pause', 'fa-circle-play')
                }
                audiocontainer.playbt.classList.replace('fa-pause', 'fa-play')                
            }
        }
    }
}

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