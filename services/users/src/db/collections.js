const db = require('./connection');

module.exports = db.createCollection({
        name: String,
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        created_at: Date,
        updated_at: Date
    });

// // create a schema
// let userSchema = ({
//         name: String,
//         email: { type: String, required: true, unique: true },
//         password: { type: String, required: true },
//         created_at: Date,
//         updated_at: Date
//     }),

//     // creating a model from the schema
//     Model = connection.model('User', userSchema);
//     User = new Model;

// // make this available to our users in our Node applications
// module.exports = User;

