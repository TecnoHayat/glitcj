const Discord = require("discord.js");
const db = require('wio.db')
module.exports.run = async (client, message, args) => {
  

  
  let bankapara = db.fetch(`bankapara_${message.author.id}`)
    let miktar = args[0]
//-----------------------------------------------------------------------------------------------------\\   

    if(!miktar) return message.channel.send(new Discord.RichEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL)
.setDescription(`⛔ Bankadan çekmek istediğin para miktarını girmelisin!

\`g!çek <miktar>\``))
  //-----------------------------------------------------------------------------------------------------\\
 if(miktar === 'all' || args[0] === 'hepsi') {
   if(bankapara === 0) return message.channel.send(new Discord.RichEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL)
.setDescription(`⛔ Bankadan çekmek için hiç paran yok!`))
db.add(`bankapara_${message.author.id}`, -bankapara)
db.add(`para_${message.author.id}`, bankapara)   
message.channel.send(new Discord.RichEmbed()
.setColor("GREEN")
.setAuthor(message.author.tag, message.author.avatarURL)
.setDescription(`✅ Başarılı, bankadan ${bankapara} 💸 çektin!`))
} else {
    if(isNaN(miktar)) return message.channel.send(new Discord.RichEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL)
.setDescription(`🤔 Girdiğin miktar geçerli bir sayı değil !?`))  
  }
//-----------------------------------------------------------------------------------------------------\\
      if(miktar < 0 || miktar.startsWith('0')) return message.channel.send(new Discord.RichEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL)
.setDescription(`🤔 Girdiğin miktar geçerli bir sayı değil !?`))
   if (miktar > bankapara) return message.channel.send(new Discord.RichEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL)
.setDescription(`⛔ Şuan bankanda sadece ${bankapara} 💸 var`))
  
//-----------------------------------------------------------------------------------------------------\\
if(args[0] === 'all' || args[0] === 'hepsi') {
  return;
}  else {
message.channel.send(new Discord.RichEmbed()
.setColor("GREEN")
.setAuthor(message.author.tag, message.author.avatarURL)
.setDescription(`<:yes:775339203105259540> Başarılı, bankadan ${miktar} 💸 çektin!`))
db.add(`para_${message.author.id}`, miktar)
db.add(`bankapara_${message.author.id}`, -miktar) 
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["with","cek","withdraw"],
  permLevel: 0
};

exports.help = {
  name: 'çek',
};