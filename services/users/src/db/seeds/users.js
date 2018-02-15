// module.exports = {
//     delete: function(model) {
//         model.remove()
//     },
//     create: function(model) {
//         // insert data in users table
//         let user = new model({
//             name: 'michael',
//             email: 'michael-schwarzer@gmail.com',
//             password: 'b@nana87'
//         });
//         user.save((err) => {
//             err ? console.error(err) :
//                 console.log('User saved succesfully');
//         });
//     }
// }