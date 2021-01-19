const Discord = require('discord.js');
 ayarlar = require('../ayarlar.json');
const moment = require('moment')
exports.run = (bot, message, params) => {
  const filterLevels = ['Yok', 'Rolü Olmayanlar İçin', 'Herkes İçin']
       const tarih =  message.guild.createdAt

let kur = {
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

   const embed = new Discord.RichEmbed()
   .setColor("#D2EE07")
   .setAuthor(message.guild.name, message.guild.userURL)
   .setThumbnail(message.guild.iconURL,)
      .addField(' Ad ve ID', `📝 ${message.guild.name + ', '+ message.guild.id}`, false)
   		.addField('  Kanallar', `:small_orange_diamond:Toplam: ${message.guild.channels.size} | :keyboard: Yazı: ${message.guild.channels.filter(c => c.type === "text").size} | :microphone2: Sesli: ${message.guild.channels.filter(c => c.type === "voice").size}`, false)
      .addField(' Üyeler', `:bust_in_silhouette: Üye: ${message.guild.memberCount} | <:online:703614552050237522> Çevrimiçi: ${message.guild.members.filter(m => m.user.presence.status != "offline").size}`, true)
			.addField(' Roller', `:lock: ${message.guild.roles.size}`,false)
   			.addField(' Rol Listesi', message.guild.roles.map(roles => `\`${roles.name}\``).join(' '))
			.addField(' Sakıncalı içerik filtresi', `:underage: ${filterLevels[message.guild.explicitContentFilter]}`,false)
      .addField(' Bölge', message.guild.region.replace('europe',':map: Avrupa'),false)
      .addField('  Oluşturulma Tarihi', `:calendar_spiral: ${moment(message.guild.createdAt).format('DD')} ${kur[moment(message.guild.createdAt).format('MM')]} ${moment(message.guild.createdAt).format('YYYY h:mm:ss')}`)
      .addField('Sunucu Sahibi', `${message.guild.owner.user+''}`,false)
   .setTimestamp()
   message.channel.send({embed});
   message.react('✓');
 };
 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: [],
   permLevel: 0
 };

 exports.help = {
   name: 'sunucu-bilgi',
   description: 'Kullanılan Yerdeki Sunucu Bilgilerini Gösterir.',
   usage: 'sunucu-bilgi'
 };