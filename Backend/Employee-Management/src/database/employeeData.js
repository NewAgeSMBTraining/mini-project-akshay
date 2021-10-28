const mongoose = require('mongoose');

const connectMongoose = () => {
    mongoose.connect("mongodb://localhost:27017/databaseMain", {
        useNewUrlParser : true,
        useUnifiedTopology : true
    }).then(res => {
        console.log('Connected to MongoDB Database');
    })
};

module.exports = connectMongoose;
