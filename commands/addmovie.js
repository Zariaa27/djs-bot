exports.run = (client, message, args) => {
  var Discord = require("discord.js");
    // Add movie to catalogue
    if (message.author.id !== "502823349110571008") return message.reply("Nope..");
    let movie = message.content.slice(9)
    const movieEmbed = new Discord.MessageEmbed()
    .setTitle("New movie alert!")
    .setDescription(`Movie title: ${movie}`)
    .setColor('PURPLE');
    client.channels.cache.get("837347237418762331").send(movieEmbed).then(m => {
        m.react('✅')
        m.react("❌");
    })
    message.author.send(`The movie ${movie} has been added to the catalogue`)
};