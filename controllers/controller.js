const db = require('../database');

const getRecords = (req, res) => {
    const allRecords = db.get('Records').value();
    res.json(allRecords);
};

// const getRecordByTitle = (req, res) => {
//     const recordTitle = (req.params.title).charAt(0).toLocaleUpperCase().concat(req.params.title.slice(1).toLocaleLowerCase());
//     const recordSearched = db.get('Records').find({ title: recordTitle }).value();
//     res.json(recordSearched);
// }

const getRecordByTitle = (req, res, next) => {
    const recordTitle = (req.params.title).charAt(0).toLocaleUpperCase().concat(req.params.title.slice(1).toLocaleLowerCase());
    const recordSearched = db.get('Records').find({ title: recordTitle }).value();
    res.render('index', { title: recordSearched.title, artist: recordSearched.artist });
}

const postRecords = (req, res) => {
    const newRecord = req.body;
    const allRecords = db.get('Records').value();
    db.get('Records').push(newRecord).write();
    res.json(allRecords);
};

const deleteRecordByTitle = (req, res) => {
    const recordTitle = (req.params.title).charAt(0).toLocaleUpperCase().concat(req.params.title.slice(1).toLocaleLowerCase());
    const allRecords = db.get('Records').value();
    const deletedRecord = db.get('Records').remove({ title: recordTitle }).write();
    console.log(allRecords);
    res.json(allRecords);
}

module.exports = { getRecords, getRecordByTitle, postRecords, deleteRecordByTitle }