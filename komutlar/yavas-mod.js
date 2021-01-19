const Discord = require('discord.js');

exports.run = async(client, message, args) => {
      if (!args[0])
      return message.channel.send(
        `Yavaş modu ayarlamam için bir sayı yazmalısın!`
      );
  if (args[0] > 1000) return message.channel.send("Slowmode en fazla 1000 olabilir.")
    if (isNaN(args[0])) return message.channel.send(`Bu bir sayı değil`);
    let reason = message.content.slice(
      client.ayarlar.prefix.length + 9 + args[0].length + 1
    );
    if (!reason) {
      reason == "Meşale Network!";
    }
    message.channel.setRateLimitPerUser(args[0], reason);
    message.channel.send(
      `Artık bu kanala **${args[0]}** saniyede bir mesaj yazılabilecek.`
    );
};
  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["slow-mode", "slowmode", "yavas-mod", 'yavasmod', 'yavaşmod'],
  permLevel: 3,
  kategori: "mod"
};

exports.help = {
 name: 'yavaş-mod',
  description: 'Sohbete yazma sınır (süre) ekler.',
  usage: 'yavaş-mod [1/1000]',
};