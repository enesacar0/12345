const Discord = require('discord.js');

let botid = ('650739604789395476') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} İletişim Bilgileri`)
    .addField('XRY', 'sizin için uğraşyan bir kişiyim <3 .')//ne kadar yetkili komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
    .addField(`» Linkler`, `[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=715291514686931025&scope=bot&permissions=268435624)
                            [Destek Sunucusu](https://discord.gg/jyPzXRV)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  kategori:'eğlence',
  kategori:'moderasyon',
  kategori:'bot',
  kategori:'yapımcım',
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: 'bot hakkında bilgi',
  usage: 'davetet'
};
   