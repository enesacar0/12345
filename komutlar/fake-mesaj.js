 const Discord = require('discord.js');

exports.run = function (client, message, args) {
    let kişi = message.mentions.users.first();
   id:if(message.author.id !== '640497223502790667') return message.reply('Yetkin Yok Kardeşim! ');
    let yazi = args[1]
    if (!yazi) return message.reply('Lütfen Yazini Yaz')
    message.delete()
    message.channel.createWebhook(kişi.username, kişi.avatarURL)
    .then(webhook => webhook.edit(kişi.username, kişi.avatarURL)
        .then(wb => {
            const hook = new Discord.WebhookClient(wb.id, wb.token);
            hook.send(yazi)
            hook.delete()
        })
        .catch(console.error))
        .catch(console.error);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
  kategori:'yetkili',
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'fakemsj',
    description: 'fakemesaj',
    usage: 'fakemesaj'
};