const Discord = require('discord.js');

 

exports.run = async(client, message) => {
     message.channel.send(
 new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Force Bot Ping')
.setDescription("Pingim : " + client.ping + "ms")
    );

}

 

exports.conf = {

    enabled : true,

    guildOnly : false,

    aliases : ['p'],

    permLevel : 0

}

 

exports.help = {

    name : 'ping',

    description : 'ping',

    usage : 'ping'

}