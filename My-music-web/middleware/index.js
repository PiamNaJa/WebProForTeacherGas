const middlewareObj = {};
        

middlewareObj.isLoggedIn = function(req, res, next){
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

middlewareObj.isAdmin = function(req, res, next){
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

module.exports = middlewareObj;