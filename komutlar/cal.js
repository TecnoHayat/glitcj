const Discord = require('discord.js');
const ms = require('parse-ms');
const db = require('wio.db')
module.exports.run = async (client, message, args) => {
  function rastgeleMiktar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
} 
 let user =  message.mentions.users.first()
 if(!user) return message.channel.send(new Discord.RichEmbed()
                      .setColor("RED")
                      .setAuthor(message.author.tag, message.author.avatarURL)                   
                      .setDescription(`⛔ Parasını çalmak istediğin kullanıcıyı etiketlemelisin!`))
  let targetuser = await db.fetch(`para_${user.id}`);
  let author     = await db.fetch(`çalma_${message.author.id}`);
  let author2    = await db.fetch(`para_${message.author.id}`);

  let timeout = 1200000;
if (author !== null && timeout - (Date.now() - author) > 0) {
  let time = ms(timeout - (Date.now() - author));
    let timeEmbed = new Discord.RichEmbed()
    .setColor("RED")
    .setAuthor(message.author.tag, message.author.avatarURL)
     .setDescription(`⏱ Birisini soymak için ${time.minutes ? time.minutes + ' dakika,' : ''} ${time.seconds ? time.seconds + ' saniye beklemelisin!' : 'tekrar dene!'}`);
    message.channel.send(timeEmbed)
  } else {

    let moneyEmbed = new Discord.RichEmbed()
  .setColor("RED")
  .setAuthor(message.author.tag, message.author.avatarURL)  
  .setDescription(`⛔ Para çalmak için en az 200 💸 paraya ihtiyacın var`);


  if (author2 < 200) {
    return message.channel.send(moneyEmbed)
  }
var lostmoney = rastgeleMiktar(150,500)
  let moneyEmbed2 = new Discord.RichEmbed()
  .setColor("RED")
  .setAuthor(message.author.tag, message.author.avatarURL)  
  .setDescription(`⛔ Faqir birisini soymaya çalıştın ve ${lostmoney} 💸 ceza yedin`);
  


  if (targetuser <= 100) {
    return message.channel.send(moneyEmbed2),db.set(`çalma_${message.author.id}`, Date.now()),db.add(`para_$${message.author.id}`, -lostmoney)
       db.set(`çalma_${message.author.id}`, Date.now())
       db.add(`para_${message.author.id}`, -lostmoney)
  }

  let authorembed = new Discord.RichEmbed()
  .setColor("RED")
  .setAuthor(message.author.tag, message.author.avatarURL)  
  .setDescription(`⛔ Kendini soymayımı düşünüyorsun?!`);

    if(user.id === message.author.id) {
    return message.channel.send(authorembed)
  }

    let gotmoney = rastgeleMiktar(600,1200)

  let embed = new Discord.RichEmbed()
   .setAuthor(message.author.tag, message.author.avatarURL)  
   .setDescription(`✅ Soygun Başarılı, ${user}'ı soydun ve ${gotmoney} 💸 kazandın`)
   .setColor("GREEN")

   message.channel.send(embed)

    await db.add(`para_${user.id}`, -gotmoney);
await db.add(`para_${message.author.id}`, gotmoney);
await db.set(`çalma_${message.author.id}`, Date.now());
  
		}

}
exports.conf = {
  enabled: true,
  aliases: [],
};

exports.help = {
  name: 'çal',
};