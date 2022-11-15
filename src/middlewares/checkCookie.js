module.exports = (req,res,next)=>{
    if(req.cookies.userData){
        req.session.email = req.cookies.userData.email;
    }
    next();
};