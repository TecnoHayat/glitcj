const Discord = require('discord.js');
const db = require('wio.db')
const ms = require('parse-ms')
exports.run = async(client, message) => {
  function rastgeleMiktar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
} 
let times = await db.fetch(`worktime_${message.author.id}`)
  let day = 86400000
  if (times !== null && day - (Date.now() - times) > 0) {
        let time = ms(day - (Date.now() - times));
    message.channel.send(new Discord.RichEmbed()
                        .setColor("RED")
                        .setAuthor(message.author.tag, message.author.avatarURL)
                        .setDescription(`⏱ Günlük ödülünü almak için ${time.hours ? time.hours + " saat,": ""} ${time.minutes ? time.minutes + ' dakika,' : ''} ${time.seconds ? time.seconds + ' saniye beklemelisin!' : 'komutu tekrar gir!'}`))
  return
  }
let moneys = rastgeleMiktar(2300,2700);
      message.channel.send(new Discord.RichEmbed()
                   .setColor("YELLOW")
                   .setAuthor(message.author.tag, message.author.avatarURL)
                   .setDescription(`Günlük ödülünü topladın, cüzdanına ${moneys} 💸 eklendi!`))

db.set(`worktime_${message.author.id}`, Date.now())

  db.add(`para_${message.author.id}`, moneys)
    
 };

exports.conf = {
  enabled: true,
  aliases: ["gunluk"],
};

exports.help = {
  name: 'günlük',
};