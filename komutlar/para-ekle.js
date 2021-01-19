const Discord = require("discord.js");
const db = require('wio.db')
const ayarlar = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {

    let id = "514818551287119888"
  let user = message.mentions.users.first()
  var money = args[1] 
if (message.author.id !== id) return message.channel.send("Bu komutu yalnızca bot sahibi kullanabilir!")
  if(!user) return message.channel.send(new Discord.RichEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL)
.setDescription(`Cüzdanına para eklenecek kişiyi etiektlemelisin!`))

  if(!args[1]) return message.channel.send(new Discord.RichEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL)
.setDescription(`⛔ Cüzdana eklenecek para miktarını girmelisin!`)) 

  if(isNaN(args[1])) return message.channel.send(new Discord.RichEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL)
.setDescription(`⛔ Cüzdana eklenecek para miktarını girmelisin!`)) 

  if(args[1] < 0) return message.channel.send(new Discord.RichEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL)
.setDescription(`🤔 Girdiğin miktar geçerli bir sayı değil !?`)
                                                      );    


message.channel.send(new Discord.RichEmbed()
.setColor("GREEN")
.setAuthor(message.author.tag, message.author.avatarURL)
.setDescription(`✅ ${user} kullanıcısının cüzdanına ${money} 💸 eklendi!`))
console.log(money)
db.add(`para_${user.id}`, parseInt(money))
}
  

exports.conf = {
  enabled: true,
  aliases: ["paraekle"],
};

exports.help = {
  name: 'para-ekle',
};