module.exports = (req,res,next)=>{
    if(req.cookies.users){
        req.session.email = req.cookies.users.email;
    }
    next();
};