const Discord = require('discord.js');

exports.run = async (client, message, args) => {// Can°B#1308

message.channel.send('Bekle..').then(a => {
var zar1 = ['1', '2', '3', '4', '5', '6'];
var zar2 = ['1', '2', '3', '4', '5', '6'];
setTimeout(() => {
a.edit(`Zar atıldı. Çıkan sonuç: ${Math.floor(Math.random()*zar1.length)} ${Math.floor(Math.random()*zar2.length)}`)
}, 1000);
});

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
}

exports.help = {
  name: 'zar-at',
  description: 'Zar atar',
   usage: 'zar-at'
};// codare ♥