var Botkit = require('botkit');

var config = require(__dirname + '/config.js');

var controller = Botkit.slackbot({
	debug: false
});

controller.spawn({
	token: config.token
}).startRTM();

controller.hears("hello", "direct_message,direct_mention,mention", function(bot, message) {
	bot.reply(message, "Hello from the Zoid side !");
});
