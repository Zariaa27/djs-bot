exports.run = (client, message, args) => {
    var Discord = require("discord.js");
    var axios = require("axios");
      // This is the stats command for covid.
      let countrie = message.content.split(7)
      if (!args[0])
      return message.channel.send(
        "You need to use the options below:\n**canada**\n**france**\n**usa**\n**uk**"
      );
    if (countrie === "canada"){
      axios.get("https://disease.sh/v3/covid-19/countries/canada").then(response => {
          let canadaCases = response.data.cases;
          const canadaembed = new Discord.MessageEmbed()
          .setTitle("Canada's COVID cases")
          .setDescription(canadaCases + " people have caught COVID in Canada.")
          .setFooter("Canada's COVID cases")
          message.channel.send(canadaembed)
      })
    }
    if (countrie === "france"){
        axios.get("https://disease.sh/v3/covid-19/countries/france").then(response => {
            let canadaCases = response.data.cases;
            const frembed = new Discord.MessageEmbed()
            .setTitle("France's COVID cases")
            .setDescription(canadaCases + " people have caught COVID in France.")
            .setFooter("France's COVID cases")
            message.channel.send(frembed)
        })
      }
      if (countrie === "usa"){
        axios.get("https://disease.sh/v3/covid-19/countries/usa").then(response => {
            let canadaCases = response.data.cases;
            const usaembed = new Discord.MessageEmbed()
            .setTitle("USA's COVID cases")
            .setDescription(canadaCases + " people have caught COVID in the USA.")
            .setFooter("USA's COVID cases")
            message.channel.send(usaembed)
        })
      }
      if (countrie === "uk"){
        axios.get("https://disease.sh/v3/covid-19/countries/uk").then(response => {
            let canadaCases = response.data.cases;
            const ukembed = new Discord.MessageEmbed()
            .setTitle("UK's COVID cases")
            .setDescription(canadaCases + " people have caught COVID in the UK.")
            .setFooter("UK's COVID cases")
            message.channel.send(ukembed)
        })
      }
  };