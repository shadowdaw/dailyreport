var mongoose = require('mongoose');

module.exports = function(config) {

    //定义 D 函数为 连接数据库
    mongoose.connect(config.mongo, {}, function(err, res) {
        if (err) {
            console.log(err);
        }
    });
    var user=mongoose.model('user', {
        username: String,
        password: String,
        realname: String,
        createDate:{type : Date, default: Date.now},
        updateDate:{type : Date, default: Date.now},
        avatar:String
    });

    var report=mongoose.model('report', {
        username: String,
        done: String,
        difficulty: String,
        progress: String,
        reprotDate:{type : Date, default: Date.now},
        createDate:{type : Date, default: Date.now},
        updateDate:{type : Date, default: Date.now},
    });

    return {'user':user,'report':report};


}
