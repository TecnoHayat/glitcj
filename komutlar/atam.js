const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  .setAuthor("Atam ❤️ \n")
        .setURL('')
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setImage("https://78.media.tumblr.com/8d4df8e3037e4bdce100f6bb72fcccb3/tumblr_ogaa330qp31st7nhfo2_500.gif")
  .setFooter("Force Bot")
  /*
   * Takes a Date object, defaults to current date.
   */

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'atam',
  description: 'Botun Atatürk  Sistemi.',
  usage: 'atam'
};