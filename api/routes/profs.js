let Prof = require('../model/prof');

// Récupérer tous les professeurs (GET)
function getProfs(req, res) {
    Prof.find((err, profs) => {
        if (err) {
            console.log("Erreur : ", err);
            res.send(err);
            return;
        }
        console.log("Professeurs trouvés : ", profs);
        res.json(profs);
    });
}


// Récupérer un professeur par son id (GET)
function getProf(req, res) {
    let profId = req.params.id;

    Prof.findById(profId, (err, prof) => {
        if (err) {
            console.log("Erreur : ", err);
            res.send(err);
            return;
        }
        console.log("Professeur trouvé : ", prof);
        res.json(prof);
    });
}

module.exports = { getProfs, getProf };
