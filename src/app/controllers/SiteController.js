const users = require('../models/users')
const { mutipleMongooseToObject } = require('../../util/mongoose')

class SiteController {
    // [GET] /new
    // index(req, res){
    //     res.render('home');
    // }
    index(req, res, next){

        users.find({})
            .then(users => {
                // users = users.map(users => users.toObject())
                res.render('home', {
                    users: mutipleMongooseToObject(users)
                })
            })
            .catch(next);
    }
 


    search(req, res){
        res.render('search');
    }

}

module.exports = new SiteController;