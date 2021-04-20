exports.run = (client, message, args) => {
  var Discord = require("discord.js");
    // MC Lookup
    let username = message.content.slice(10)
    const axios = require("axios");
	axios
        .get(`https://playerdb.co/api/player/minecraft/${username}`)
        .then(response => {
        const sucessEmbed = new Discord.MessageEmbed()
        .setTitle("Minecraft player info")
        .setDescription("Username: " + response.player.username)
        .setAuthor(response.data.avatar);
        message.reply(sucessEmbed)
    }).catch(error => {
     console.log("Error")
  })
};