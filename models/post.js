var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const affirmationSchema = new Schema({
  affirmation: String,
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  userName: String,
  userAvatar: String
}, {
  timestamps: true
});

const journalSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: function () {
      return new Date();
    }
  },
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  userName: String,
  userAvatar: String,
  affirmation: [affirmationSchema]
}, {
  timestamps: true
});


module.exports = mongoose.model('Journal', journalSchema);