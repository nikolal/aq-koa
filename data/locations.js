// create a schema
const locationSchema = new Schema({
  name: String,
  backgroundUrl: String,
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
const Location = mongoose.model('Location', locationSchema);

// make this available to our users in our Node applications
module.exports = Location;
