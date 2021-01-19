const Discord = require('discord.js')
const db = require('wio.db')
exports.run = async (client, message, args) => {
          let user = message.mentions.users.first() || message.author
          
  var cüzdan = db.fetch(`para_${user.id}`)
  var banka = db.fetch(`bankapara_${user.id}`)   
  var toplam= cüzdan+banka
message.channel.send(new Discord.RichEmbed()
                  .setColor("YELLOW")
                  .setAuthor(user.tag, user.avatarURL)     
                  .addField("Cüzdan",`${cüzdan ? cüzdan + ' 💸' : "0 💸"}`,true)
                  .addField("Banka",`${banka ? banka + ' 💸' : "0 💸"}`,true)
                  .addField("Toplam",`${toplam ? toplam + ' 💸' : "0 💸"}`,true))
  }

exports.conf = {
  enabled: true,
  aliases: ["money"],
};

exports.help = {
  name: 'bakiye',
};