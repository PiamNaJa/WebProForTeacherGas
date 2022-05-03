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