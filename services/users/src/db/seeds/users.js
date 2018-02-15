const User = require('../models').User;

exports.seed = (mongoose) => {
    // empty users table
    User.remove()
        .then(() => {
            // insert data in users table
                let user = new User({
                    name: 'michael',
                    email: 'michael-schwarzer@gmail.com',
                    password: 'b@nana87'
                }); user.save((err) => {
                    err ? console.error(err) :
                        console.log('User saved succesfully');
                });
        })
        .catch((err) => { console.log(err); });
};