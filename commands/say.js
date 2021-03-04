exports.run = (client, message, args) => {
    var Discord = require("discord.js");
    message.delete()
        if (message.author.bot) {
            return;
        }
        if (!message.member.hasPermission("MENTION_EVERYONE")) {
            const permission = new Discord.MessageEmbed()
            .setTitle('You do not have the permission to use this command.')
            .setColor('PURPLE');
            message.channel.send("You do not have the permission to use this command.")
            return;
        }
      let msg = message.content.slice(5);
      const sayEmbed = new Discord.MessageEmbed()
      .setColor('PURPLE')
      .setTitle(msg)

      message.channel.send(sayEmbed);
    }