let Account = require('../model/account');

// Récupérer tous les comptes (GET)
function getAccounts(req, res) {
    Account.find((err, accounts) => {
        if (err) {
            console.log("Erreur : ", err);
            res.send(err);
            return;
        }
        console.log("Comptes trouvés : ", accounts);
        res.json(accounts);
    });
}


// Récupérer un compte par son id (GET)
function getAccount(req, res) {
    let accountId = req.params.id;

    Account.findById(accountId, (err, account) => {
        if (err) {
            console.log("Erreur : ", err);
            res.send(err);
            return;
        }
        console.log("Compte trouvé : ", account);
        res.json(account);
    });
}

module.exports = { getAccounts, getAccount };
