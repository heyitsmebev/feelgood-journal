var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
  userAvatar: String
}, {
  timestamps: true
});


module.exports = mongoose.model('Journal', journalSchema);