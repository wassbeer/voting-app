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
    createPoll: function(obj) {
        return getDb().collection('polls').insertOne(obj);
    },

   readPolls: async function(userId) {
    let o_id = new ObjectId(userId),
        cursor = getDb().collection('polls').find({ 
            user: o_id 
        });
    return await cursor.next() // returns document result of collection.find() method
    }

    // both for poll and result query
    readPoll: async function(pollId) {
        let o_id = new ObjectId(pollId),
            cursor = getDb().collection('polls').find({ 
                _id: o_id 
            });
        return await cursor.next() 
    },

    updatePoll: async function(pollId, updateObj) {
        let o_id = new ObjectId(pollId),
            conditions = { _id: o_id },
            update = { $set: updateObj };
        return await getDb().collection('polls').updateOne(conditions, update);
    },

    deletePoll: async function(pollId) {
        let o_id = new ObjectId(pollId);
        return await getDb().collection('polls').deleteOne({ _id: o_id });
    }
};