var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
      // This name should be required and have between 3 and 100 characters.
    name: {type: String, required: true, minlength:3, maxlength:100}
  }
);

// Virtual for Genre's URL
GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/Genre/' + this._id;
});

//Export model
module.exports = mongoose.model('Genre', GenreSchema);