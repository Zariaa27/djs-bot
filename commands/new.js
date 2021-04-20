exports.run = (client, message, args) => {
  const supportChannel = "819945601894187008"
    var Discord = require("discord.js");
    // Ticket system (temporary)
    message.delete();
    const nope = new Discord.MessageEmbed()
    .setTitle("Wrong channel!")
    .setDescription("You must use the " + message.guild.channels.cache.get(supportChannel).toString() + " channel!")
    .setTimestamp()
    .setFooter("Woops!");
    if (message.channel.id !== supportChannel)
        return message.channel.send(nope)
    let reason = message.content.slice(5)
    const privateEmbed = new Discord.MessageEmbed()
    .setTitle("New ticket oppened!")
    .setDescription(`<@${message.author.id}> has oppened a ticket. \n\n • Reason:  __**${reason}**__\n\n***DELETE THIS MESSAGE ONLY WHEN IT IS SOLVED!!!***`)
    .setTimestamp()
    .setFooter("Sent at")
    .setColor("RED")
    client.channels.cache.get("820123181682524170").send(privateEmbed).then(() => {
        const pm = new Discord.MessageEmbed()
        .setTitle("Succesfully opened your ticket!")
        .setDescription("Your ticket has been opened, you will be messaged by a staff member in the next 24-48h. Please be patient as we might be getting a lot of tickets.")
        .setColor("RED");
        message.author.send(pm)
    })
};