
const passport = require('passport');
const router = require("express").Router();
let User = require('../models/user.model');

/*Log in need to update to check password also*/

router.route('/').get(
    passport.authenticate('local'),
        function(req, res) {
          // If this function gets called, authentication was successful.
          // `req.user` contains the authenticated user.
          res.json(req.user._id);
    }
);


router.route('/').post((req, res) => {

    const user = new User({
        username: req.body.username,
        password: req.body.password
     });
     
     req.login(user, function(err, user) {
        if (err) {
             res.status(400).json("Error: " + err);
        } else {
            passport.authenticate("local") (req, res, function () {
                console.log("user log in");
                res.json(req.user._id);
           });
        }
     });
});

/* none unique username response on front end (require to addd)*/
router.route('/add').post((req, res) => {
    
    User.register({username: req.body.username}, req.body.password, function(err, user) {
        if (err) {
            res.status(400).json('Error: ' + err);
        } else {
           passport.authenticate("local") (req, res, function () {
                res.json(user._id);
           });
        }
     });
});

router.route("/logout").get((req, res) => {
    req.logout();
    console.log("user log out");
    res.status(200).json("Log out successful");
 });

module.exports = router;