exports.run = (client, message, args) => {
  var Discord = require("discord.js");
      if (!args[0])
    return message.channel.send("Error : Please enter a suggestion.");
    
      const embed = new Discord.MessageEmbed()
    .setColor("YELLOW")
    .setFooter("Sent at")
    .setTimestamp()
    .addField("Suggestion", "```" + args.join(" ") + "```")
    .addField("Suggested by: ", message.author.username)
    .setTitle(`🗳️ **New Suggestion** 🗳️`);

  let msg = client.channels.cache
    .get("817203709301227561")
    .send(embed)
    .then(async function (msg) {
      await msg.react("✅");
      await msg.react("❌");
      await message.delete({ timeout: 1000 });
    })
    .catch(function (error) {
      console.log(error);
    });
  message.reply("Your suggestion has been sucessfully sent.")
};