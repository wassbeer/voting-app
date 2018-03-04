const getDb = require('./connection').getDb,
    ObjectId = require('mongodb').ObjectId;

/*

    | Endpoint              | HTTP Method | CRUD Method |              Result |
    | --------------------- | :---------: | ----------: | ------------------: |
    | /api/polls/create     |    POST     |      CREATE |       create a poll |
    | /api/polls/ping       |     GET     |        READ |                pong |
    | /api/polls/user/:id   |     GET     |        READ | get polls of a user |
    | /api/polls/poll/:id   |     GET     |        READ |          get a poll |
    | /api/polls/result/:id |     GET     |        READ |   get a poll result |
    | /api/polls/update/:id |     PUT     |      UPDATE |         edit a poll |
    | /api/polls/delete/:id |   DELETE    |      DELETE |       delete a poll |

*/


module.exports = {
    createPoll: function (obj) {
        return getDb().collection('polls').insertOne(obj);
    },

    readPolls: async function (userId) {
        cursor = getDb().collection('polls').find({
            userId: userId
        });
        return await cursor.toArray() 
    },

    readPoll: async function (pollId) {
        let o_id = new ObjectId(pollId)
            cursor = getDb().collection('polls').find({
                _id: o_id
            });
        return await cursor.next()
    },

    updatePoll: async function (pollId, updateOption, updatePollName) {
        let o_id = new ObjectId(pollId)
        console.log(o_id)
        console.log(updateOption)
        console.log(updatePollName)
        return await getDb().collection('polls').update({ _id: o_id }, {
            $inc: { [updateOption]: 1 }, $set: { pollName: updatePollName }
        });
    },

    deletePoll: async function (pollId) {
        let o_id = new ObjectId(pollId)
        return await getDb().collection('polls').deleteOne({ _id: o_id });
    }
};