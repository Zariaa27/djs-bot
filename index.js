const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");

const client = new Discord.Client();
const config = require("./config.json");
client.config = config;
console.log("Started")
const words = [
    'hey',
    'hi',
    'bye',
    'salut',
    'coucou',
    'salutations',
    'wassup'
]
client.on('message', m => {
const content = m.content.toLowerCase()
if (words.some(word => content.includes(word.toLowerCase()))) return m.react("👋");
if (content == 'pp') return m.react("🍆");
});

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`✔️  Loaded command : ${commandName}.js`);
    client.commands.set(commandName, props);
  });
});

client.on("guildMemberAdd", (member) => {
    console.log('Member has joined.')
    client.channels.fetch("830904492324552754").send(`Welcome to ${guild.name} @{member.displayName}!`)
})
    
client.login(config.token);