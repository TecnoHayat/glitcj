const Discord = require ("discord.js")
exports.run = function(client,message,args) {
  const DarkCode = new Discord.RichEmbed()
  
 .setDescription(`**${message.author.username}** Yemek Yiyor!`)
 .setImage("https://cdn.discordapp.com/attachments/747769679984066582/748439692181241856/hizli-yemek-yemek.gif")  //istediğiniz gifi koyun
 .setFooter(client.user.username+" Sundu",client.user.avatarURL)
 .setTimestamp()
  
  message.delete()
  message.channel.send(DarkCode);
  
 };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yemekye'],
  permLevel: 0
 };

exports.help = {
  name:'yemek-ye',
  description:'yemek yersiniz',
  usage:'yemek-ye'
 }