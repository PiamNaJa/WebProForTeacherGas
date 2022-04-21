let cart = {id:req.user._id};

Cart.create(cart, function(err, new){
    if(err)
    {

    }
    else
    {
        Cart.findbyId(new._id, function(err, eiei){
            if(err)
            {
        
            }
            else
            {
                eiei.product.push(foundproduct);
                eiei.save()
                redirect
            }
    }
})