const Route = require('express').Router();
const { getRecords, getRecordByTitle, postRecords, deleteRecordByTitle } = require('../controllers/controller')

Route.get('/getrecords', getRecords);
Route.get('/getrecords/:title', getRecordByTitle);
Route.post('/postrecords', postRecords);
Route.delete('/deleterecords/:title', deleteRecordByTitle);

module.exports = Route;