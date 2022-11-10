const {
  addNoteHandler, getAllNotes, getNoteById, editNoteByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotes,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteById,
  },
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
];

module.exports = routes;
