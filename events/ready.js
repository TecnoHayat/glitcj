const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
var oyun = [
        "🔥 Gelişitirici - seyit#0001",
        "✨ g!yardım Yayında",
        "💪 7/24 Aktif ",
        "💥 Botumuzu Davet Et g!davet"
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "https://discord.gg/EjthYcP" );
        }, 2 * 5000);
    
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("idle");
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oynuyor kısmı ayarlandı !`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an Çalışıyor`); 
};

//client.user.setActivity(`${prefix}yardım + ${client.guilds.size} sunucu + ${client.users.size} kullanıcı`);