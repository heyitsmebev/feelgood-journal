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
  grateful1: {
    type: String,
    required: true
  },
  grateful2: String,
  grateful3: String,
  great1: String,
  great2: String,
  great3: String,
  amazing1: String,
  amazing2: String,
  amazing3: String,
  better1: String,
  better2: String,
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