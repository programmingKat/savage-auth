// config/database.js
module.exports = {
    //     mongodb://127.0.0.1:27017/myapp' - why different?
    //URL vs URI 

    // scheme://username:password@HOST_NAME:optionalPort/pathparams?queryparams

    // a host name can be a domain or a ip address      
    //HTTP 80
    //HTTPS 443                                       
    'url' : 'mongodb+srv://demo:demo@cluster0.q2ojb.mongodb.net/myFirstDatabase?retryWrites=truew=majority', 
    'dbName': 'demo'
};
