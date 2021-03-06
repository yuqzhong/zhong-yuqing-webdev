var mongoose = require('mongoose');
mongoose.Promise = require('q').Promise;
// mongoose.connect('mongodb://localhost/zhong-yuqing-webdev');

var connectionString = 'mongodb://localhost/zhong-yuqing-webdev';

if(process.env.MLAB_USERNAME_WEBDEV) {
    var username = process.env.MLAB_USERNAME_WEBDEV;
    var password = process.env.MLAB_PASSWORD_WEBDEV;
    connectionString = 'mongodb://' + username + ':' + password;
    connectionString += '@ds137141.mlab.com:37141/heroku_txkg7zr5';
}



mongoose.connect(connectionString);

require('./service/user.service.server');
require('./service/website.service.server');
require('./service/page.service.server');
require('./service/widget.service.server');