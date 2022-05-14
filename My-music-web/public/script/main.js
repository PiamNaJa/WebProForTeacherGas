function cardbthover()
{
    const songcard     = document.querySelectorAll('#songcard'),
          cardplaybt   = document.querySelectorAll('.card__playbt');
    for(let i = 0; i<songcard.length; i++)
    {
        songcard[i].addEventListener('mouseover', ()=>{
            cardplaybt[i].style.visibility = "visible";
        });

        songcard[i].addEventListener('mouseout', ()=>{
            cardplaybt[i].style.visibility = "hidden";
        });
    }
}

function albumsongrowhover()
{
    const albumsongrow      = document.querySelectorAll('.album-song-row'),
          playbtinrow       = document.querySelectorAll('.playbt--inrow'),
          favbtinrow        = document.querySelectorAll('.favbt--inrow'),
          addplaylistinrow  = document.querySelectorAll('.addplaylist--inrow');

    for(let i = 0; i<albumsongrow.length; i++)
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

    for(let i = 0; i<albumsongrow.length; i++)
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