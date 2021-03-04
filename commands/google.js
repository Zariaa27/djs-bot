exports.run = (client, message, args) => {
  var Discord = require("discord.js");
    message.delete();
    const embed = new Discord.MessageEmbed()
    .setTitle("Google is your friend!")
    .setDescription("[Use Google!](https://google.com)");
    message.channel.send(embed)
};