const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    googleId: {
        type: String,
        required: true
    },

  cart: [{type: Schema.Types.ObjectId, ref:'products'}], 
});

module.exports = mongoose.model('users', UserSchema);