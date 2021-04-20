exports.run = (client, message, args) => {
    var Discord = require("discord.js");
    const { version } = require("discord.js");
    const FastSpeedtest = require("fast-speedtest-api");
    let speedtest = new FastSpeedtest({
        token: "Votre_clef_D'API", // required
        verbose: false, // default: false
        timeout: 10000,
        unit: FastSpeedtest.UNITS.Mbps
    });
    const os = require('os');
    const platform = os.platform();
    const arch = os.arch();
    const lancement = new Discord.MessageEmbed()
    .setTitle("Loading, please be very patient. . .")
    .setColor("PURPLE");
    message.channel.send(lancement).then((m) => {
        speedtest.getSpeed().then(s => {
        const embedStats = new Discord.MessageEmbed()
        .setColor("PURPLE")
        .addField(
            ":desktop: System Info",
                "• CPU : ``" +
                  os.cpus().map((i) => `${i.model}`)[0] +
                  "``\n" +
                  "• Arch : ``" +
                  os.arch() +
                  "``\n" +
                  "• OS : ``" +
                  os.platform() +
                  "`` \n" +
                  "• Discord.js : " +
                  "v" +
                  version +
                  "\n" +
                  "• NodeJS : " +
                  process.version+
                  "\n" +
                  "• Ping : " +
                  Math.round(client.ws.ping) +
                  "ms"
          )
          .addField(
            ":minidisc: **System Ressources**",
            "• Memory : " +
              (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) +
              "/" +
              (os.totalmem() / 1024 / 1024).toFixed(2) +
              " MB\n" + 
              "• Load Average : " + os.loadavg() +
              "\n• Speedtest : " + Math.round(s) + " **Mb/s**"
              )
        m.edit(embedStats);
    })
    })
  };