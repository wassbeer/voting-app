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

    readPolls: async function (userName) {
        cursor = getDb().collection('polls').find({
            userName: userName
        });
        return await cursor.toArray() // returns document results of collection.find() method
    },

    // both for poll and result query
    readPoll: async function (pollId) {
            cursor = getDb().collection('polls').find({
                _id: pollId
            });
        return await cursor.next()
    },

    updatePoll: async function (pollId, updateOption, updatePollName) {
        return await getDb().collection('polls').update({ _id: pollId }, {
            $inc: { [updateOption]: 1 }, $set: { pollName: updatePollName }
        });
    },

    deletePoll: async function (pollId) {
        return await getDb().collection('polls').deleteOne({ _id: pollId });
    }
};