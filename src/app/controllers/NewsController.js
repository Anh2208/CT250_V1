
class NewsController {
    // [GET] /new
    index(req, res){
        res.render('news');
    }

    show(req, res){
        res.send("NEW DEFTYAIL");
    }

}

module.exports = new NewsController;