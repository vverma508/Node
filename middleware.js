//This method will look for each request made from client and make sure that it is not a GET request.
//We can also check for other things for security like token verification and decryption of data before processing.
exports.RestrictGetCall = function (req,res,next) {

   if( req.method=='GET'){
   res.send("Get calls are blocked")
   }
   else{
       next();
   }
  }