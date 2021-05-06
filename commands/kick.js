exports.run = (client, message, args) => {
    var Discord = require("discord.js");
    message.delete()
    if (!message.member.hasPermission("KICK_MEMBERS")) {
        const nopermission = new Discord.MessageEmbed()
        .setTitle("You do not have the required permissions to execute this command.")
        .setColor('PURPLE');
        message.channel.send(nopermission)
        return;
    }

    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.members.resolve(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .kick(args[1])
          .then(() => {
            // We let the message author know we were able to kick the person
            const sucessful = new Discord.MessageEmbed()
            .setTitle(`Sucessfully kicked ${user.tag}!`)
            .setColor("PURPLE");
            message.channel.send(sucessful);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            const unable = new Discord.MessageEmbed()
            .setTitle("I was unable to kick that user.")
            .setColor("PURPLE");
            message.channel.send(unable);
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        const notinserver = new Discord.MessageEmbed()
        .setTitlw("That user is not in this server, dumbass!")
        .setColor("PURPLE");
        message.channel.send(notinserver);
      }
      // Otherwise, if no user was mentioned
    } else {
        const mention = new Discord.MessageEmbed()
        .setTitle("You did not mention the user to kick. . .")
        .setColor("PURPLE");
      message.channel.send(mention);
    }
  }