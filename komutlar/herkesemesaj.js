const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  client.guilds.forEach(guild => {
    let lewix = guild.channels.filter(c => c.type === "text").random();
    lewix.send(
      new Discord.RichEmbed()
        .setColor("GREEN")
        .setTitle("İyi günler")  
        .setFooter(client.user.username, client.user.avatarURL) 
    );
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["herkese-gönder", "herkese-söyle"],
  permLevel: 4
};

exports.help = {
  name: "herkese-mesaj",
  description: "İstediğiniz şeyi bota yazdırır.",
  usage: "herkese-mesaj"
};