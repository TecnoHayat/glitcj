	const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const prefix = ayarlar.prefix
const moment = require('moment');
require('moment-duration-format');
exports.run = async(client, message, args) => {
  
  if (!message.member.hasPermission("MANAGE_ROLES")){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor('RED')
    .setDescription(`:negative_squared_cross_mark: Bu komutu kullanabilmek için \`Rolleri Yönet\` yetkisi gerekmektedir!`)
    .setFooter(`${client.user.tag} | ${prefix}yardım`)
    .setTimestamp()
        
    message.channel.send(embed)
  } else {
  
    var aylar = {
      "01": "Ocak",
      "02": "Şubat",
      "03": "Mart",
      "04": "Nisan",
      "05": "Mayıs",
      "06": "Haziran",
      "07": "Temmuz",
      "08": "Ağustos",
      "09": "Eylül",
      "10": "Ekim",
      "11": "Kasım",
      "12": "Aralık"
    }
    
     if (args[0] == 'yardım') {
      const embedd = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor('ORANGE')
      .setDescription(`Kullanım şekilleri \n***${prefix}rolbilgi id***\n***${prefix}rolbilgi @rol***\n***${prefix}rolbilgi <adı>***`)
      .setFooter(`${client.user.tag} | ${prefix}yardım`)
      .setTimestamp()
        
      message.channel.send(embedd)
    }
    var duration = moment.duration(client.uptime).format(" D [gün] H [saat] m [dakika] s [saniye]")
    let rol = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(rol => rol.id === args[0]);
    if (!args[0]) {
        var embed = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
          .setDescription(`Rol Bilgi İçin Bir Rol Etiketlemelisin. Doğru kullanım: **${prefix}rolbilgi @rol**\n***${prefix}rolbilgi yardım***`)
          .setColor('RED')
          .setTimestamp()
          .setFooter(`${client.user.tag} | ${prefix}yardım`)
          message.channel.send(embed)
        } else {
        var embed = new Discord.RichEmbed()
            .setColor(rol.hexColor)
            .setThumbnail(`https://api.alexflipnote.xyz/colour/image/${rol.hexColor.replace("#", "")}`)
            .addField('Genel Bilgiler', `**İsmi**: ${rol}\n**Role Sahip Kullanıcı(lar)**: ${rol.members.size}\n**İD:** ${rol.id}\n**Oluşturulma Tarihi:** ${moment(rol.createdAt).format('DD')} ${aylar[moment(rol.createdAt).format('MM')]} ${moment(rol.createdAt).format('YYYY HH:mm:ss')}` )
            .addField('Renk Bilgileri', `**Renk Kodu: ** ${rol.hexColor}`)
            .addField('Diğer Bilgiler', `**Entegrasyon mu?: ** ${rol.managed ? ':white_check_mark:' : ':negative_squared_cross_mark:'}\n**Etiketlenebilir mi?: ** ${rol.mentionable ? ':white_check_mark:' : ':negative_squared_cross_mark:'}\n**Pozisyonu: ** ${rol.position}\n**Ayrı Gösteriliyor mu?:** ${rol.hoisted ? ':white_check_mark:' : ':negative_squared_cross_mark:'} `)
            .setFooter(`${client.user.tag} | ${prefix}yardım`)
            .setTimestamp()
             message.channel.send(embed);
      }
    
   
    
  }
 };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rolbilgi", "rolara", "rol-ara", "role-info", "roleinfo", "search-role", "searchrole"],
  permLevel: 0,
}
exports.help = {
  name: 'rol-bilgi',
  description: 'Etiketlediğiniz rol hakkında bilgi alırsınız.',
  usage: 'rol-bilgi [rol]'
};