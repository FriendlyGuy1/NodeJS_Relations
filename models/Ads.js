const mongoose = require('mongoose');

const Ads = mongoose.model('Ads', new mongoose.Schema({
    name: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    description: String
  }));

  module.exports = Ads;
