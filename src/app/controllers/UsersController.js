const Users = require('../models/users')
const { mongooseToObject } = require('../../util/mongoose')

class UsersController {
    // [GET] /new
    // index(req, res){
    //     res.render('home');
    // }

    // [GET] /show
    show(req, res, next){
        Users.findOne({ slug: req.params.slug})
            .then((users) => {
                res.render('./users/show', { users: mongooseToObject(users) });
            })
            .catch(next);   
    }

    // [GET] /users/create
    create(req, res, next){
        Users.findOne({ slug: req.params.slug})
            res.render('./users/create');
    }

    // [POST] /users/adduser
    adduser(req, res, next){
        const user = new Users(req.body);
        user.save();

        res.send('Save Successfull');
    }

}

module.exports = new UsersController();