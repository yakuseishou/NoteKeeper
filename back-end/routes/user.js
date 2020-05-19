const router = require("express").Router();
let User = require('../models/user.model');

// router.route('/').get((req, res) => {
//     const username = req.body.username;
//     console.log(username);
//     User.find({username})
//     .then(users => res.json(users))
//     .catch(err => res.status(400).json("Error: " + err));
// });

router.route('/').post((req, res) => {
    const username = req.body.username;
    User.find({username: username})
        .then(user => {
            if (user[0]) {
                res.json(user);
            } else {
                res.status(400).json("No such User");
            }
        })
        .catch(err => res.status(400).json("Error: " + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const newUser = new User({username});
    newUser.save()
        .then(() => res.json('User add!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;