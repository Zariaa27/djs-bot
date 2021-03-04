exports.run = (client, message, args) => {
    var Discord = require("discord.js");
    const helpCommand = new Discord.MessageEmbed()
	.setColor('PURPLE')
	.setTitle('Commands list')
	.setDescription("**General Commands**\n```$help : Shows a list of the availible commands.\n$ping : Shows the bot's latency in miliseconds.\n$say [args...] : Says the chosen sentence (Needs the mention everyone permission.).\n$system : Displays all system specs and some cool stuff, be very patient with this command!\n$google : funny command to mess with people.\n$search [args. . .] : Gives you a google search link based on what you ask it to do.```\n**Moderator Commands**\n```$kick : Kick the said member if the user has the needed permissions.\n$ban : Ban the said member if the user has the needed permissions.```")
	.setTimestamp()
	.setFooter('2021 Zariaa, All rights reserved');

    message.channel.send(helpCommand);
  };