const router = require("express").Router();
let Note = require('../models/note.model');
let User = require('../models/user.model');

router.route('/:id').get((req, res) => {
    const id = req.params.id;
    User.findById(id)
        .then(user => res.json(user.notes))
        .catch(err => res.status(400).json("Error: " + err));
});

/*Create new entry */
router.route('/add/:id').post((req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    const content = req.body.content;

    const newNote = new Note({
        title: title,
        content: content
    });

    console.log(id);

    User.findById(id)
        .then(user => {
            user.notes.push(newNote);
            user.save()
                .then(user => {
                    console.log(user.notes);
                    res.json(user.notes);
                })
                .catch(err => console.log("save error"));
        })
        .catch(err => console.log("find error"));
});

router.route("/:user/:id").delete((req, res) => {
    const userId = req.params.user;
    const noteId = req.params.id;
    
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