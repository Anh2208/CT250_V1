// Using Node.js `require()`
const mongoose = require('mongoose');


async function connect() {

    try {
        await mongoose.connect('mongodb://127.0.0.1/tourism_database');

        console.log('Connect successfully!!!');
    }
    catch (error) {
        console.log('Connect failed!!!');
    }

}

module.exports = { connect };
