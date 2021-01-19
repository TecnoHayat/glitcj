const Discord = require("discord.js")
const  NovelCovid  = require('novelcovid');

exports.run = async (client, message, args) => {
   NovelCovid.all().then(data => {
    const embed = new Discord.RichEmbed()
      .addField("Toplam Vaka", data.cases)
      .addField("Toplam Ölen", data.deaths)
      .addField("Toplam İyileşen", data.recovered)
      .setFooter("Bu bilgiler Dünya Genelindeki bilgilerdir!");
    message.channel.send(embed);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
name: 'corona',
description: 'global corona verilerini gösterir',
usage: 'corona'
};