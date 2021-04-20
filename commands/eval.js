exports.run = (client, message, args) => {
  var Discord = require("discord.js");

  if (message.author.id !== "502823349110571008")
    return message.channel.send("ERROR : Only Zariaa is able to do this!");
  if (!args[0]) return message.channel.send("ERROR : Enter code please...");
  if (args.includes("token") || args.includes("client.token"))
    return message.reply(
      "Hey bro, I can't let you do this, sowwy.."
    );
  try {
    let codein = args.join(" ");
    let code = eval(codein);

    if (typeof code !== "string")
      code = require("util").inspect(code, { depth: 0 });
    let embed = new Discord.MessageEmbed()
      .setAuthor("Evaluate")
      .setColor("RANDOM")
      .addField(":inbox_tray: Entry", `\`\`\`js\n${codein}\`\`\``)
      .addField(":outbox_tray: Out", `\`\`\`js\n${code}\n\`\`\``)
      .setFooter("Yay");
    message.channel.send(embed);
  } catch (e) {
    message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
  }
};