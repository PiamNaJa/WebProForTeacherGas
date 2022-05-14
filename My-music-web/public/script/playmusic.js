const mainaudio = new Audio(),
      audiocontainer = {
            container   : document.querySelector('.audiocontainer'),
            playbt      : document.getElementById('audio--control--playbt'),
            nextbt      : document.getElementById('audio--control--nextbt'),
            prevbt      : document.getElementById('audio--control--prevbt'),
            currentTime : document.querySelector('.songcurrenttime'),
            duration    : document.querySelector('.songduration'),
            slider      : document.querySelector('.progress-slider'),
            volume      : document.querySelector('.volume-slider'),
            img         : document.querySelector('.audiocontainer--img'),
            songname    : document.querySelector('.audiocontainer--name'),
            artistname  : document.querySelector('.audiocontainer--artist')
        },
      songdata  = document.querySelectorAll('#songdata'),
      playbtn   = document.querySelectorAll('#btnplay'),
      HistorySongIndex = [],
      CheckLocation = (window.location.href).startsWith(window.location.protocol + "//" + window.location.host + "/playlist/") || (window.location.href).startsWith(window.location.protocol + "//" + window.location.host + "/artist/") || (window.location.href).startsWith(window.location.protocol + "//" + window.location.host + "/album/");
let current = {
    Bt : 0,
    SongIndex : 0
    },
    updateaudioinfo;
mainaudio.volume = 0.03;

function showCurrentTime()
{
    let currentMin = Math.floor(mainaudio.currentTime/60);
    let currentSec = Math.floor(mainaudio.currentTime) - currentMin*60;
    audiocontainer.currentTime.textContent = currentMin + ":" + currentSec.toLocaleString('en-us', {minimumIntegerDigits:2, useGrouping:false});
    audiocontainer.slider.value = mainaudio.currentTime;
    if(mainaudio.ended)
    {
        clearInterval(updateaudioinfo);
        if(current.SongIndex === playbtn.length-1)
        {
            audiocontainer.playbt.classList.replace('fa-pause', 'fa-play');
        }
        else
        {
            nextSong();
        }  
    }
}

function setDuration(index)
{
    mainaudio.onloadedmetadata = ()=>{
        let durationMin = Math.floor(Math.floor(mainaudio.duration)/60);
        let durationSec =  Math.floor(mainaudio.duration) - durationMin*60;
        audiocontainer.duration.textContent = durationMin + ":" + durationSec.toLocaleString('en-us', {minimumIntegerDigits:2, useGrouping:false});
        audiocontainer.slider.max = mainaudio.duration; 
    }
    audiocontainer.slider.disabled = false;
    if(index !== undefined)
    {
        audiocontainer.img.src = songdata[index].getAttribute('data-img');
        audiocontainer.songname.textContent = songdata[index].getAttribute('data-song');
        audiocontainer.artistname.textContent = songdata[index].getAttribute('data-artist');
    }
}

function changeIconToPause(Bt)
{
    if(Bt.classList.contains('fa-play'))
    {
        Bt.classList.replace('fa-play', 'fa-pause')
    }
    else if(Bt.classList.contains('fa-circle-play'))
    {
        Bt.classList.replace('fa-circle-play', 'fa-circle-pause')
    }
}

function changeIconToPlay(Bt)
{
    if(Bt.classList.contains('fa-pause'))
    {
        Bt.classList.replace('fa-pause', 'fa-play')
    }
    else if(Bt.classList.contains('fa-circle-pause'))
    {
        Bt.classList.replace('fa-circle-pause', 'fa-circle-play')
    }
}

function checkAudioControlBt()
{
    if(current.SongIndex === playbtn.length-1)
    {
        audiocontainer.nextbt.parentElement.classList.replace('text-white', 'text-white-50');
        audiocontainer.nextbt.parentElement.style.cursor = "context-menu";
        audiocontainer.nextbt.parentElement.disabled = true;
    }
    else
    {
        audiocontainer.nextbt.parentElement.classList.replace('text-white-50', 'text-white');
        audiocontainer.nextbt.parentElement.style.cursor = "pointer";
        audiocontainer.nextbt.parentElement.disabled = false;
    }
    if((HistorySongIndex.length === 1 && !CheckLocation) || (current.SongIndex===0 && CheckLocation))
    {
        audiocontainer.prevbt.parentElement.classList.replace('text-white', 'text-white-50');
        audiocontainer.prevbt.parentElement.style.cursor = "context-menu";
        audiocontainer.prevbt.parentElement.disabled = true;
    }
    else
    {
        audiocontainer.prevbt.parentElement.classList.replace('text-white-50', 'text-white');
        audiocontainer.prevbt.parentElement.style.cursor = "pointer";
        audiocontainer.prevbt.parentElement.disabled = false;
    }
}

function prevSong(){
    if(HistorySongIndex.length !== 1)
    {
        HistorySongIndex.pop();//ลบตัวปัจจุบัน
        const lastSongIndex = HistorySongIndex.pop()//เอาเพลงที่แล้ว
        mainaudio.pause();
        mainaudio.src = songdata[lastSongIndex].getAttribute('data-audio');
        current.Bt = playbtn[lastSongIndex];
        changeIconToPause(playbtn[lastSongIndex]);
        changeIconToPlay(playbtn[current.SongIndex]);
        clearInterval(updateaudioinfo);
        setDuration(lastSongIndex);
        current.SongIndex = lastSongIndex;
        HistorySongIndex.push(current.SongIndex);
        mainaudio.play();
        changeIconToPause(audiocontainer.playbt)
        showCurrentTime();
        updateaudioinfo = setInterval(showCurrentTime, 1000);
        checkAudioControlBt();
    }
}

function prevSongOnlyPlaylistArtistAlbumPage(){
    mainaudio.pause();
    mainaudio.src = songdata[current.SongIndex-1].getAttribute('data-audio');
    current.Bt = playbtn[current.SongIndex-1];
    changeIconToPause(playbtn[current.SongIndex-1]);
    changeIconToPlay(playbtn[current.SongIndex--]);
    clearInterval(updateaudioinfo);
    setDuration(current.SongIndex);
    mainaudio.play();
    changeIconToPause(audiocontainer.playbt)
    showCurrentTime();
    updateaudioinfo = setInterval(showCurrentTime, 1000);
    if(current.SongIndex === 0)
    {
        audiocontainer.prevbt.parentElement.classList.replace('text-white', 'text-white-50');
        audiocontainer.prevbt.parentElement.style.cursor = "context-menu";
        audiocontainer.prevbt.parentElement.disabled = true;        
    }
    else
    {
        audiocontainer.prevbt.parentElement.classList.replace('text-white-50', 'text-white');
        audiocontainer.prevbt.parentElement.style.cursor = "pointer";
        audiocontainer.prevbt.parentElement.disabled = false;
    }
    checkAudioControlBt();
}

audiocontainer.prevbt.onclick = CheckLocation? prevSongOnlyPlaylistArtistAlbumPage : prevSong

function nextSong(){
    if(current.SongIndex !== playbtn.length-1)
    {
        if(!CheckLocation)
        {
            HistorySongIndex.push(current.SongIndex+1);
        }
        mainaudio.pause();
        mainaudio.src = songdata[current.SongIndex+1].getAttribute('data-audio');
        current.Bt = playbtn[current.SongIndex+1];
        changeIconToPause(playbtn[current.SongIndex+1]);
        changeIconToPlay(playbtn[current.SongIndex++]);
        clearInterval(updateaudioinfo);
        setDuration(current.SongIndex);
        mainaudio.play();
        changeIconToPause(audiocontainer.playbt)
        showCurrentTime();
        updateaudioinfo = setInterval(showCurrentTime, 1000);
        checkAudioControlBt();
    }
}

audiocontainer.nextbt.onclick = nextSong;

audiocontainer.slider.addEventListener('change', ()=>{
    mainaudio.currentTime = audiocontainer.slider.value;
    clearInterval(updateaudioinfo);
    showCurrentTime();
    updateaudioinfo = setInterval(showCurrentTime, 1000)
})

audiocontainer.volume.addEventListener('input', ()=>{
    mainaudio.volume = audiocontainer.volume.value;
})

audiocontainer.playbt.onclick = ()=>{
    if(mainaudio.paused)
    {
        clearInterval(updateaudioinfo);
        mainaudio.play();
        updateaudioinfo = setInterval(showCurrentTime, 1000)
        audiocontainer.playbt.classList.replace('fa-play', 'fa-pause')
        if(current.Bt)
        {
            changeIconToPause(current.Bt);
        }        
    }
    else
    {
        mainaudio.pause();
        clearInterval(updateaudioinfo);
        audiocontainer.playbt.classList.replace('fa-pause', 'fa-play')
        if(current.Bt)
        {
            changeIconToPlay(current.Bt)
        }
        audiocontainer.playbt.classList.replace('fa-pause', 'fa-play')            
    }
}
for(let i = 0; i< playbtn.length; i++)
{
    playbtn[i].onclick = ()=>{
        const path = window.location.protocol + "//" + window.location.host + songdata[i].getAttribute('data-audio');
        if(decodeURIComponent(mainaudio.src) !==  path) //เพลงภาษาไทยurlจะถูกencode เลยต้อง decode
        {
            clearInterval(updateaudioinfo);
            mainaudio.src = songdata[i].getAttribute('data-audio');
            mainaudio.preload = "metadata"
            mainaudio.play();
            audiocontainer.container.hidden = false;
            showCurrentTime();
            setDuration(i);
            updateaudioinfo = setInterval(showCurrentTime, 1000);
            current.SongIndex = i;
            if(!CheckLocation)
            {
                HistorySongIndex.push(i);
            }
            checkAudioControlBt()            
            current.Bt = playbtn[i];
            changeIconToPause(current.Bt);
            audiocontainer.playbt.parentElement.disabled = false;
            audiocontainer.nextbt.classList.replace('text-white-50', 'text-white')
            audiocontainer.playbt.classList.replace('fa-play', 'fa-pause')
            for(let j = 0; j< playbtn.length; j++)
            {
                if(j!==i)
                {
                    changeIconToPlay(playbtn[j])    
                }          
            }
        }
        else
        {
            if(mainaudio.paused)
            {
                clearInterval(updateaudioinfo);
                mainaudio.play();
                
                updateaudioinfo = setInterval(showCurrentTime, 1000)
                current.Bt = playbtn[i];
                changeIconToPause(current.Bt);
                audiocontainer.playbt.classList.replace('fa-play', 'fa-pause')                
            }
            else
            {
                mainaudio.pause();
                clearInterval(updateaudioinfo);
                changeIconToPlay(playbtn[i])
                audiocontainer.playbt.classList.replace('fa-pause', 'fa-play')                
            }
        }
    }
}