exports.run = (client, message, args) => {
  var Discord = require("discord.js");
    if (message.author.id !== "502823349110571008")
        return message.channel.send("Nope, not happening...")
    let msg = message.content.slice(9);
    message.delete()
  if (message.author.id !== "502823349110571008") return;
    const embed = new Discord.MessageEmbed()
    .setTitle("New To-Do incoming.")
    .setDescription("```" + msg + "```")
    .setFooter("Sent")
    .setTimestamp()
    .setColor("YELLOW");
client.channels.cache.get(`817477111509024819`).send(embed).then(m => {

 m.react("❌")
})
}