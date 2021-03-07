const Note  = require('../../../app/models/note.model');

describe('Note model', () => {
    describe('Note Schema', () => {
        let note1;
        beforeEach(() => {
            note1 = {
                title: "My Note",
                content: "Note content body"
            };
        });
        test('should correctly validate', async () => {
            await expect(new Note(note1).validate()).resolves.toBeUndefined();
          });
        test('should throw a validation error if title is invalid', async () => {
            note1.title = ""
            await expect(new Note(note1).validate()).rejects.toThrow();
          });
        test('should throw a validation error if content is invalid', async () => {
            note1.content = ""
            await expect(new Note(note1).validate()).rejects.toThrow();
          });
    });
});
