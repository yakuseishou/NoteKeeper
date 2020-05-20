const router = require("express").Router();
let Note = require('../models/note.model');
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    const id = req.body.user_id;
    User.findById(id)
        .then(user => res.json(user.notes))
        .catch(err => res.status(400).json("Error: " + err));
});

/*Create new entry */
router.route('/add').post((req, res) => {
    const id = req.body.user_id;
    const title = req.body.title;
    const content = req.body.content;

    const newNote = new Note({
        title,
        content
    });

    User.findById(id, (err, user)=> {
            if (!err) {
                user.notes.push(newNote);
                user.save();
            }
        })
        .then(() => res.json("User updated"))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/:id").delete((req, res) => {
    const userId = req.body.user_id;
    const noteId = req.body.note_id;
    
    User.findById(userId)
    .then(user => {
        user.notes.id(noteId).remove();
        res.json("Note deleted");
        user.save();
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/:id').get((req, res) => {
//     Note.findById(req.params.id)
//         .then(note => res.json(note))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route("/update/:id").post((req, res) => {
//     Note.findById(req.params.id)
//         .then(note => {
//             note.username = req.body.username;
//             note.title = req.body.title;
//             note.content = req.body.content;

//             note.save()
//                 .then(() => res.json("Note Updated"))
//                 .catch(err => res.status(400).json("Error: " + err));
//         })
//         .catch(err => res.status(400).json("Error: " + err));
// });

module.exports = router;