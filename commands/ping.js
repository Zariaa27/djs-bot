exports.run = (client, message, args) => {
  var Discord = require("discord.js");
    message.delete();
    const embed = new Discord.MessageEmbed()
      .setTitle("Hey "+message.author.username + "!")
      .setDescription("My ping is : `"+client.ws.ping+"ms`")
      .setColor("BLACK")
      .setFooter("Copyright 2021 Zariaa.");
    message.channel.send(embed);
  
};
