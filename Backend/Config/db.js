const mongoose = require('mongoose');

function connect() {
    mongoose.connect('mongodb://localhost:27017/hms',)
        .then(() => {
            console.log(
                'Connect succssfully')
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = {connect}