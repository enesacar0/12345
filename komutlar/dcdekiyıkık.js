const Discord = require('discord.js');
exports.run = function(client, message, args) {



    const çekiliş = new Discord.RichEmbed()
   
     
    .addField(`discordakiyıkık:`, `<@${message.guild.members.random().id}>`, true)
    .setImage('https://media.giphy.com/media/cRLhKFCmCfMFQmzHjd/giphy.gif')
    .setColor("RANDOM")
    .setDescription('')
    return message.channel.sendEmbed(çekiliş);
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  kategori:'moderasyon',
  aliases: ["çekilişyap"],
  permLevel: 0
};

exports.help = {
  name: 'çekilişyap',
  
  description: 'Çekiliş yapar.',
  usage: 'çekilişyap'
};