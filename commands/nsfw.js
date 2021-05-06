exports.run = (client, message, args) => {
  var Discord = require("discord.js");
  const loveyou = require("loveyou-api");
    // NSFW
    if (message.channel.id !== "839529458091556865") return message.reply("Silly! Use the <#839529458091556865> channel!");
    let words = [
        "boobs",
        "pussy",
        "ass",
        "missionary",
        "cowgirl",
        "doggystyle",
        "blowjob",
        "cumshots",
        "hentai"
    ]
    const content = message.content.toLowerCase().slice(6)
	const works = words.some((word) => content.includes(word))
    if (works) {
     loveyou.nsfw(content).then(url => {
         const embed = new Discord.MessageEmbed()
         .setTitle('NSFW!')
         .setImage(url)
         .setColor("RED")
         .setFooter("You horny person!")
         .setTimestamp();
         message.channel.send(embed);
     });
    } else {
        message.reply("Hya there you horny person! Here is how the command should be used: `$nsfw [args...]` . For a list of arguments see ||https://docs.love-you.xyz/||")
    }
};