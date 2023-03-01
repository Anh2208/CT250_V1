// Using Node.js `require()`
const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema;


mongoose.plugin(slug);
// const ObjectId = Schema.ObjectId;
//users = Course
const users = new Schema({
  name: { type : String, maxLength: 255, },
  mssv: String,
  image: String,
  slug : {type: String, slug: 'name', unique: true, },
}, {
  timestamps: true,
});

module.exports = mongoose.model('users', users);