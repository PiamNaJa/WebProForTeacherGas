const middlewareObj = {},
      Playlist = require('../models/playlist');

middlewareObj.isLoggedIn = (req, res, next)=>{
    if(req.isAuthenticated())
    {
        return next();
    }
    else
    {
        req.flash('error', 'You need to login first');
        res.redirect('/login');
    }
}

middlewareObj.isAdmin = (req, res, next)=>{
    if(req.isAuthenticated())
    {
        if(req.user.isAdmin)
        {
            return next();
        }
        else
        {
            req.flash('error', 'You Are Not Admin!!');
            res.redirect('back');
        }
    }
    else
    {
        req.flash('error', 'You need to login first');
        res.redirect('/login');
    }
}

middlewareObj.checkPlaylistOwner = (req, res, next)=>
{
    if(req.isAuthenticated())
    {
        Playlist.findById(req.params.id, (err, foundPlaylist)=>
        {
            if(err)
            {
                res.redirect('back');
            }
            else
            {
                if(foundPlaylist.owner._id.equals(req.user._id))
                {
                    next();
                }
                else
                {
                    req.flash('error', "You do not have permission to do this action!");
                    res.redirect('back');
                }
            }
        });
    }
    else
    {
        req.flash('error', "Please Login");
        res.redirect('/login');
    }
}

module.exports = middlewareObj;