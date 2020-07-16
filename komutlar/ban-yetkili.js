const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {
  
   var başarılı = ['**İŞTE BU!** <:basarili:690022418735169592>', '**SÜPER!** <:basarili:690022418735169592>', '**NASIL YAPTIN BUNU?!** <:basarili:690022418735169592>', '**MÜKEMMEL!** <:basarili:690022418735169592>', '**SEVDİM BUNU!** <:basarili:690022418735169592>', '**ŞİMDİ OLDU!** <:basarili:690022418735169592>'];
   var x = başarılı[Math.floor(Math.random() * başarılı.length)];

   var başarısız = ['**TÜH!** <:basarisiz:690022419116851268>', '**OLMADI BU!** <:basarisiz:690022419116851268>', '**HAY AKSİ!** <:basarisiz:690022419116851268>', '**HADİ ORADAN!** <:basarisiz:690022419116851268>', '**OLMADI YA!** <:basarisiz:690022419116851268>', '**BÖYLE OLMAZ?!** <:basarisiz:690022419116851268>', '**HADİ YA!** <:basarisiz:690022419116851268>'];
   var x2 = başarısız[Math.floor(Math.random() * başarısız.length)];
  
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.reply(`**${ayarlar.prefix}ban-yetkilisi** isimli komutu kullanabilmek için \`SUNUCUYU YÖNET\` yetkisine sahip olman gerekiyor.`)
    if (!args[0]) return message.reply(`Sistemi kullanabilmek için, .ban-rol ayarla/sıfırla @rol yazmalısın.\nDetaylı bilgi için: .yardım ban-yetkilisi`)
    if (args[0] == 'ayarla') {
 let rol = message.mentions.roles.first() || message.guild.roles.get(args.join(' '))
  let newRole;
  let tworole;
  if (!rol)     return message.channel.send(x2 + ` Bir rol etiketle.`)
  else newRole = message.mentions.roles.first().id
  let id = message.mentions.roles.first().id  
    db.set(`banyetkilisi_${message.guild.id}`, id)
  let banrol = await db.set(`banyetkilisi_${message.guild.id}`, newRole)
  if (!message.guild.roles.get(newRole)) return message.channel.send(x2 + ` Etiketlediğin rolü bulamadım. Silinmiş olabilir, bi' kontrol et.`)
    message.channel.send(x + ` Ban yetkilisi <@&${newRole}> olarak ayarlandı.`)
  } 

  if (args[0] == 'sıfırla') {
    
    
    db.delete(`banyetkilisi_${message.guild.id}`)

    message.channel.send(x + ` Ban yetkilisi başarıyla sıfırlandı.`)
  }
};
  
  
    
exports.conf = {
 enabled: true,
 guildOnly: false,
  kategori:'bot',
 aliases: ['banyetkilisi'],
 permLevel: 0
};

exports.help = {
 name: 'ban-yetkilisi',
 description: '+ban komutunu hangi role sahip olanların kullanacağını ayarlarsınız.',
 usage: 'ban-yetkilisi ayarla @rol',
 kategori: '**AYARLAR**',
 permLvl: '**SUNUCUYU YÖNET**'
};