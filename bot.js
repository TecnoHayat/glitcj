const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const data = require("wio.db");
const database = require('wio.db');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment')
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[komut] ${message}`);

};


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} adet komut yüklemeye hazırlanılıyor.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut ismi: ${props.help.name.toUpperCase()}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});


client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

  
client.yetkiler = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if(message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 1;
  if(message.member.hasPermission("KICK_MEMBERS")) permlvl = 2;
  if(message.member.hasPermission("BAN_MEMBERS")) permlvl = 3;
  if(message.member.hasPermission("MANAGE_GUILD")) permlvl = 4;
  if(message.member.hasPermission("ADMINISTRATOR")) permlvl = 5;
  if(message.author.id === message.guild.ownerID) permlvl = 6;
  if(message.author.id === ayarlar.sahip) permlvl = 7;
  return permlvl;
};


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ban !') {
    msg.channel.send('Kim banlanmak ister ? ||https://imgur.com/RkIfjMP||');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'klan kira') {
    msg.channel.send('Giriş 100k haftalık 50k  sınırsız gelmek için fener ver');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.channel.send('Aleyküm selam hoşgeldin');
  }
});




const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Force Bot | Aktif!')) 
app.listen(process.env.PORT, () => console.log('Port ayarlandı: ' + process.env.PORT))

client.on("message", msg => {
  var dm = client.channels.get("799551177557409872"); //mesajın geleceği kanal idsi//
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) return;
    const botdm = new Discord.RichEmbed()
      .setTitle(`${client.user.username} Dm`)
      .setTimestamp()
      .setColor("BLUE")
      .setThumbnail(`${msg.author.avatarURL}`)
      .addField(":boy: Gönderen ", msg.author.tag)
      .addField(":id:  Gönderen ID :", msg.author.id)
      .addField(":globe_with_meridians: Gönderilen Mesaj", msg.content);

    dm.send(botdm);
  }
  if (msg.channel.bot) return;
});

client.on('ready', () => {
  client.guilds.forEach(guild => {
      guild.members.forEach(async member => {
          const fetch = await database.fetch(member.user.id);
          if (!fetch) return;
          if ((Date.now() <= fetch.end) || fetch) {
              let kalan = fetch.end - Date.now();
              let logChannelID = '796451427584835624'; // sizin log kanalızın idsi
              let logChannel = await guild.channels.get(logChannelID);
              setTimeout(() => {
                  const embed = new Discord.RichEmbed()
                      .setAuthor(fetch.moderatorUsername, fetch.moderatorAvatarURL);
                  return member.removeRole('755855973758926890').then(() => {
                      database.delete(member.user.id)
                      logChannel.send(embed.setColor('GREEN').setTitle('Susturulması açıldı.').setDescription(` Moderatör : <@!${fetch.moderatorID}'>
**• Susturulan**: <@!${member.user.id}>
**• Sebep**: ${fetch.reason}`));
                  })
}, kalan);
          }
  });
});
});


//dddddd

//dddddd

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

  
var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);