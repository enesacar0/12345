

const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
    const filter = response => {
      return response.author.id == message.author.id;
    }
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('**Yönetici** adlı izin gerekiyor.');
  else {
    message.channel.send('Ne kadar mesaj kaldırılacak?').then(() => {
      message.channel.awaitMessages(filter, {max: 1})
      .then((eslesen) => {
        message.channel.bulkDelete(eslesen.first().content).then(message.channel.send(eslesen.first().content + ' ').then(i => i.delete(5000)))
      })
    });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  kategori:'yetkili',
  aliases: ['sil'],
  permLevel: 2
};

exports.help = {
  name: 'kaldır',
  description: 'by enesss.',
  usage: 'kaldır'
}