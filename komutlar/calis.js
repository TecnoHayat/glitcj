const Discord = require('discord.js');
const db = require('wio.db')
const ms = require('parse-ms')
exports.run = async(client, message) => {
  function rastgeleMiktar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
} 
  
let times = await db.fetch(`çalışmasüresi_${message.author.id}`)
  let day = 1020000
  if (times !== null && day - (Date.now() - times) > 0) {
        let time = ms(day - (Date.now() - times));
    message.channel.send(new Discord.RichEmbed()
                        .setColor("RED")
                        .setAuthor(message.author.tag, message.author.avatarURL)
                        .setDescription(`⏱ Çalışmak için ${time.minutes ? time.minutes + ' dakika,' : ''} ${time.seconds ? time.seconds + ' saniye beklemelisin!' : 'komutu tekrar gir!'}`))
  return
  }
  let works = ["Süpermarkette","Part-time'da","Fırında","Fabrikada","Galeride","Sanayide","Ayakkabı Mağazasında","Teknoloji mağazasında"]
  var work = works[Math.floor(Math.random() * works.length)];
let moneys = rastgeleMiktar(600,1200);
      message.channel.send(new Discord.RichEmbed()
                   .setAuthor(message.author.tag, message.author.avatarURL)
                   .setColor("YELLOW")
                   .setDescription(`${work} çalıştın ve ${moneys} 💸 kazandın!`))

db.set(`çalışmasüresi_${message.author.id}`, Date.now())
  db.add(`para_${message.author.id}`, moneys)
    
 };

exports.conf = {
  enabled: true,
  aliases: ["calis","maaş"],
};

exports.help = {
  name: 'çalış',
};