const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// create a schema
let userSchema = new Schema({
        name: String,
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        created_at: Date,
        updated_at: Date
    }),

    // creating a model from the schema
    User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;