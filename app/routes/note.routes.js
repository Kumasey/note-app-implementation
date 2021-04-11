module.exports = (app) => {
    const notes = require('../controllers/note.controller');
    //create a new note
    app.post('/notes', notes.Create);

    //retrieve all notes
    app.get('/notes', notes.FindAll);

    //retrieve a single note with noteId
    app.get('/notes/:noteId', notes.FindOne);

    //update a note with note noteId
    app.put('/notes/:noteId', notes.Update);

    //delete a note with noteId
    app.delete('/notes/:noteId', notes.Delete)
}