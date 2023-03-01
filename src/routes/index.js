const newsRouter = require('./news');
const siteRouter = require('./site');
const usersRouter = require('./users');



function route(app) {
  app.use('/news', newsRouter);
  app.use('/users', usersRouter);
  app.use('/', siteRouter);

//   app.get("/news", (req, res) => {
//     res.render("news");
//   });
  //   app.get("/search", (req, res) => {
  //   res.render("search");
  // });

  // app.post("/search", (req, res) => {
  //   // res.render('search');
  //   console.log(req.body);
  //   res.send("");
  // }); 


}

module.exports = route;
