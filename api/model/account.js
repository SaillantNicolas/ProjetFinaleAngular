let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let accountSchema = Schema({
    id: Number,
    user: String,
    password: String,
    admin: Boolean
});

module.exports = mongoose.model('Account', accountSchema, 'account');
