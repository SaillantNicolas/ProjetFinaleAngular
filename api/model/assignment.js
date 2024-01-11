let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AssignmentSchema = Schema({
    rendu: Boolean,
    id: Number,
    daterendu: Date,
    matiere: String,
    nom: String,
    note: Number,
    prof: String,
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Assignment', AssignmentSchema);
