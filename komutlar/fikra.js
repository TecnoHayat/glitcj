const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
     if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xD97634)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(':fire: Üzgünüm, bunu yapamazsınız!')
  return message.author.sendEmbed(ozelmesajuyari); }  
   message.channel.send('Fıkra, yükleniyor!').then(message => {
      var espriler = ['+Hoca, bana düdük al\n-Bana da, bana da!\n-Ben de düdük isterim!\n-Bir tane de bana!\n-Ama çocuklardan sadece biri Nasrettin Hoca’ya düdük parası verir. Akşama doğru Hoca pazardan döner. Çocuklar sevinçle düdüklerini isterler. Nasrettin Hoca cebinden bir düdük çıkarır. Parayı veren çocuğa düdüğü uzatır. Tabii diğer çocuklar hep bir ağızdan bağırırlar.\n-Hani bizim düdüğümüz?\n-Nasrettin Hoca gülerek,\n- Eee, çocuklar!Parayı veren düdüğü çalar, der.', '+Bir gün Nasrettin Hoca göl kenarında gider.\n-Elinde de bir kase yoğurt vardır.\n-Hoca, yoğurdu kaşık kaşık göle boşaltmaya başlar.\n-Bu sırada onu gören biri şaşırarak,\n– Hoca ne yapıyorsun, diye sorar.\n- Hoca gülerek,\n- Görmüyor musun göle yoğurt mayalıyorum, der.\n- Adam, Hoca’nın delirdiğini düşünür.\n- Vah, vah, vah!\n- Sen çıldırdın mı Hoca! Koskoca göl maya tutar mı, deyince\n- Hoca gayet ciddi cevap verir.\n- Peki ama ya tutarsa'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['fıkra-söyle'],
  permLevel: 0
};

exports.help = {
  name: 'fıkra',
  description: 'Nasrettin Hoca Fıkraları Anlatır',
  usage: 'fıkra'
};