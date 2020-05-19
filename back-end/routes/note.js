const router = require("express").Router();
let Note = require('../models/note.model');

router.route('/').get((req, res) => {
    // const username = req.body.username;

    Note.find()
        .then(notes => res.json(notes))
        .catch(err => res.status(400).json("Error: " + err));
});

/*Create new entry */
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const title = req.body.title;
    const content = req.body.content;
    // const date = Date.parse(req.body.date);

    const newNote = new Note({
        username,
        title,
        content
    });

    newNote.save()
        .then(() => res.json('Note add!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Note.findById(req.params.id)
        .then(note => res.json(note))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/:id").delete((req, res) => {
    Note.findByIdAndDelete(req.params.id)
        .then(() => res.json('Note Deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/update/:id").post((req, res) => {
    Note.findById(req.params.id)
        .then(note => {
            note.username = req.body.username;
            note.title = req.body.title;
            note.content = req.body.content;

            note.save()
                .then(() => res.json("Note Updated"))
                .catch(err => res.status(400).json("Error: " + err));
        })
        .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;