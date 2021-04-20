exports.run = (client, message, args) => {
  var Discord = require("discord.js");
    // Announcement system
    if (message.author.id !== "502823349110571008")
        return message.channel.send("Only Zariaa can perform this action. :rofl:");
    message.delete()
    let announcement = message.content.slice(10)
    const embed = new Discord.MessageEmbed()
    .setTitle("⚠️ New Announcement! ⚠️")
    .setDescription(announcement)
    .setTimestamp()
    .setFooter("Announcement");
    client.channels.cache.get("795105559569235994").send("@everyone")
    client.channels.cache.get("795105559569235994").send(embed)
};