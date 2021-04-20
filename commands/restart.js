exports.run = (client, message, args) => {
  var Discord = require("discord.js");
 if (message.author.id !== '502823349110571008') return message.channel.send("HA! Sike!");
  const embed = new Discord.MessageEmbed()
  .setTitle("Restarting . . .")
  .setDescription("Give the bot at leat 45 seconds to restart fully.")
  .setFooter("Action registered at")
  .setTimestamp();
  message.channel.send(embed).then(() => {
  process.exit(1);
})

};