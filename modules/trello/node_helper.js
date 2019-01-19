const Trello = require("node-trello")

var NodeHelper = require("node_helper");
module.exports = NodeHelper.create({
	socketNotificationReceived: function(notification, payload) {
		console.log(this.name + " received a socket notification: " + notification + " - Payload: " + payload);
	}
});


