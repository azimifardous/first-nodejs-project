const mongoose = require('mongoose');
const logger = require('./logger')();

module.exports = function () {
    // connecting to the db
    mongoose.connect('mongodb://127.0.0.1/vidly')
        .then(() => logger.info('Connected to MongoDB...'));
}