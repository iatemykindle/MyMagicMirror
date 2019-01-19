Log.log("Loading TRELLO MY TRELLO");


Module.register("trello",{
	defaults: {
		text:"Hello World"
	},
	getDom: function() {
		Log.log("HELLO WORLD SCRIPT STARTING");
		var wrapper = document.createElement("div"); 
		Log.info("HELLO WORLD SCRIPT STARTING2");

		console.log("HELLO WORLD SCRIPT STARTING3");
		wrapper.innerHTML = "HELLO WORLD";
		this.sendSocketNotification('SET_CONFIG', this.config);
		return wrapper;
	}});

