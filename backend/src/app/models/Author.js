const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    bio: {
        type: String,
        require: true,
    }
},
{ timestamps: true }
);

module.exports = mongoose.model('Author', authorSchema);