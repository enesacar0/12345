const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(message.author.id !== '640497223502790667') return message.reply('Yetkin Yok Kardeşim! ');
if(!args[0]) return message.channel.send("🚫 **Lütfen Silinicek Mesaj Miktarını Yazın.!** 🚫");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`${message.member}, ${args[0]} Adet Mesaj Başarıyla Uzaya Fırlatıldı! admin sil 🚀`).then(msg => msg.delete(5000));
})
}

exports.conf = {
  enabled: true,
  kategori:'yapımcı',
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 2
};

exports.help = {
  name: 'sil.',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'sil'
};