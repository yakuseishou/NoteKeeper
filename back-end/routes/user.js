const router = require("express").Router();
let User = require('../models/user.model');

// router.route('/').get((req, res) => {
//     const id = req.body.user_id;
//     console.log(id);
//     User.find({_id: id})
//         .then(user => res.json(user))
//         .catch(err => res.status(400).json("Error: " + err));
// });


/*Log in need to update to check password also*/
router.route('/').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    User.find({username: username, password: password})
        .then(user => {
            if (user[0]) {
                res.json(user[0]._id);
            } else {
                res.status(400).json("No such User");
            }
        })
        .catch(err => res.status(400).json("Error: " + err));
});

/* none unique username response on front end (require to addd)*/
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const newUser = new User({username: username, password: password});
    newUser.save()
        .then(() => res.json('User add!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;