const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    message.channel.send(
      new Discord.RichEmbed()
        .setColor("GREEN")
        .addField("**Beni Sunucuna Davet Etmek İçin**", " [Tıkla](https://discord.com/oauth2/authorize?client_id=797084595135840296&scope=bot&permissions=2147483647)" )
        .addField("Yardıma mı İhtiyacın Var ?", "**g!yardım Yaz**")
        .setFooter(`Force Bot Davet Sistemi`, client.user.avatarURL) 
    );
	
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davet", "force"],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "Force Botu Davet Et",
  usage: "davet"
};