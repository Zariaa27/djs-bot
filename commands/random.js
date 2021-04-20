exports.run = (client, message, args) => {
  var Discord = require("discord.js");
    // Generate random number
    
    function getRandomInt(max) {
  	return Math.floor(Math.random() * max);
	}
    let msg = message.content.slice(8)
    let msg2 = message.content.slice(7)
    if (msg2 == '') return message.reply("You need to specify a number!");
    if (msg.includes(",")) return message.reply("You need to use a dot (`.`) instead!");
    if (msg.length > 30) return message.reply("You need to specify a number with 30 or less didgits.");
    const loading = new Discord.MessageEmbed()
    .setTitle("Loading, please wait.");
    message.channel.send(loading).then(m => {
        const embed = new Discord.MessageEmbed()
        .setTitle("Random number generated sucessfully!")
        .setColor("#63f542")
        .setDescription(`**• Max**: ${msg}\n**• Generated**: ${getRandomInt(msg)}`);
        m.edit(embed)
    })
};