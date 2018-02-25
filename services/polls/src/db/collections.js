module.exports = {
	polls: function createPollsCollection(client) {
		client.createCollection('polls', (err) => {
			err ? console.error(err) :
				(console.log('polls collection created'))
		});
	}
};