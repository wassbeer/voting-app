const express = require('express'),
    router = express.Router(),
    queries = require('../db/queries');

    /* 

        URI endpoints

        | Endpoint              | HTTP Method | CRUD Method |              Result |
        | --------------------- | :---------: | ----------: | ------------------: |
        | /api/polls/create     |    POST     |      CREATE |       create a poll |
        | /api/polls/user/:id   |     GET     |        READ | get polls of a user |
        | /api/polls/poll/:id   |     GET     |        READ |          get a poll |
        | /api/polls/update/:id |     PUT     |      UPDATE |         edit a poll |
        | /api/polls/delete/:id |   DELETE    |      DELETE |       delete a poll |

    */

router.post('/create', (req, res) => {
    let poll = ({
        pollName: req.body.pollName,
        userId: req.body.userId
    });

    async function pollOptions() {
        return await req.body.pollOptions;
    }
    // pollOptions: whale,wolf
    pollOptions().then((options) => {
        options.forEach((option) => {
            poll[option] = 0;
        })

        // { userName: 'Thomas',
        //   pollName: '"What is your favourite mammal?',
        //   _id: 5a93ecf4242fb97b96821f4e,
        //   whale: 0,
        //   wholf: 0 }

        queries.createPoll(poll)
            .then((poll) => {
                res.status(201).json({
                    success: true,
                    data: poll.ops[0]
                });
            }).catch((err) => {
                res.status(500).json({
                    success: false,
                    data: err
                });
            });
    });
});

router.get('/user/:id', (req, res) => {
    queries.readPolls(req.params.id)
        .then((poll) => {
            res.status(200).json({
                success: true,
                data: poll
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                data: err
            });
        });
});

router.get('/poll/:id', (req, res) => {
    queries.readPoll(req.params.id)
        .then((poll) => {
            res.status(200).json({
                success: true,
                data: poll
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                data: err
            });
        });
});

router.put('/update/:id', (req, res) => {
    let updateOption = req.body.pollOptions,
    updatePollName = req.body.pollName;
    queries.updatePoll(req.params.id, updateOption, updatePollName)
        .then((poll) => {
            res.status(200).json({
                success: true,
                data: poll
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                data: err
            });
        });
});

router.delete('/delete/:id', (req, res) => {
    queries.deletePoll(req.params.id)
        .then((poll) => {
            res.status(200).json({
                success: true,
                data: poll
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                data: err
            });
        });
});

module.exports = router;