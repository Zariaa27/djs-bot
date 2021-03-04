module.exports = (client) => {
  console.log(`Bot has loaded sucessfully under ${client.user.tag}`)
  const Discord = require("discord.js");
  const axios = require("axios");
  client.channels.cache.get("816934948187406346").messages.fetch("816938248025800706").then(m =>{
    setInterval(async () => {
      axios
        .get('https://disease.sh/v3/covid-19/countries/canada')
        .then(response => {
          let cas = response.data.cases
        let embed = new Discord.MessageEmbed()
        .setTitle("Cas de covid-19 au Canada. ")
        .setDescription("Caliss, encore... Ben oui, va falloir attendre que le peuple se décide à être plus intéligent et de __**PORTER SON MASQUE!**__")
        .addField("\u200b", "__**"+cas+"**__ caliss d'épais ont déjà attrapé la covid, __**faque met ton masque!**__")
        
        .setThumbnail("https://share.zariaa.tk/upload/3kz9dTR.png")
        .setImage("https://share.zariaa.tk/upload/qQoFkJm.jpg")
        .setFooter("Dernière actualisation des donnés / Last update ")
        .setTimestamp()
        .setColor("2f3136");
            m.edit(embed)
          })
    }, 180000);
  })
    const activities_list = [
    "$help",
    "Mods do their jobs",
    "LMFAO",
    "♡ From canada",
    "Dev by Zariaa"
    ];
     setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index], { type: 'LISTENING' });
    }, 10000);
}