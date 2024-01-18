let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ProfSchema = Schema({
    id: Number,
    name: String,
    firstname: String,
    email: String,
    image: String,
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('prof', ProfSchema);
