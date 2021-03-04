exports.run = (client, message, args) => {
    var Discord = require("discord.js");
    message.delete()
    if (!message.member.hasPermission("BAN_MEMBERS")) {
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
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
         */
        member
          .ban({
            reason: 'BAD PEOPLE (Ask the admin man IDK)',
          })
          .then(() => {
            // We let the message author know we were able to ban the person
            const sucessful = new Discord.MessageEmbed()
            .setTitle(`Banned user ${user.tag} sucessfully!`)
            .setColor('PURPLE');
            message.channel.send(sucessful);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            const unable = new Discord.MessageEmbed()
            .setTitle(`:loading: I was unable to ban ${user.tag}. . .`)
            .setColor('PURPLE');
            message.channel.send(unable);
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        const badmention = new Discord.MessageEmbed()
        .setTitle(`At least mention someone who is in this guild dumbass. . .`)
        .setColor('PURPLE');
        message.channel.send(badmention);
      }
    } else {
      // Otherwise, if no user was mentioned
      const mentionsomeone = new Discord.MessageEmbed()
      .setTitle(`😬 Bruh, mention someone you dumbo. . .`)
      .setColor('PURPLE');
      message.channel.send(mentionsomeone);
    }
  };