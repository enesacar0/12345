const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {
  
   var başarılı = ['**İŞTE BU!** <:basarili:690022418735169592>', '**SÜPER!** <:basarili:690022418735169592>', '**NASIL YAPTIN BUNU?!** <:basarili:690022418735169592>', '**MÜKEMMEL!** <:basarili:690022418735169592>', '**SEVDİM BUNU!** <:basarili:690022418735169592>', '**ŞİMDİ OLDU!** <:basarili:690022418735169592>'];
   var x = başarılı[Math.floor(Math.random() * başarılı.length)];

   var başarısız = ['**TÜH!** <:basarisiz:690022419116851268>', '**OLMADI BU!** <:basarisiz:690022419116851268>', '**HAY AKSİ!** <:basarisiz:690022419116851268>', '**HADİ ORADAN!** <:basarisiz:690022419116851268>', '**OLMADI YA!** <:basarisiz:690022419116851268>', '**BÖYLE OLMAZ?!** <:basarisiz:690022419116851268>', '**HADİ YA!** <:basarisiz:690022419116851268>'];
   var x2 = başarısız[Math.floor(Math.random() * başarısız.length)];
  
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.reply(`**${ayarlar.prefix}ban-kanal** isimli komutu kullanabilmek için \`SUNUCUYU YÖNET\` yetkisine sahip olman gerekiyor.`)
    if (!args[0]) return message.reply(`Sistemi kullanabilmek için, .ban-kanal ayarla/sıfırla #kanal yazmalısın.\nDetaylı bilgi için: .yardım ban-kanal`)
    if (args[0] == 'ayarla') {
 let kanal = message.mentions.channels.first() || message.guild.channels.get(args.join(' '))
  if (!kanal)     return message.channel.send(x2 + ` Bir kanal etiketle.`)
    db.set(`bankanal_${message.guild.id}`, kanal.id)
  let bankanal = await db.set(`bankanal_${message.guild.id}`, kanal.id)
  message.channel.send(x + `  Ban kanalı ${kanal} olarak ayarlandı.`)
  } 
  

  if (args[0] == 'sıfırla') {
    

    
    
    db.delete(`bankanal_${message.guild.id}`)

    message.channel.send(x + ` Ban kanalı başarıyla sıfırlandı.`)
  }
};
  
  
    
exports.conf = {
 enabled: true,
 guildOnly: false,
  kategori:'bot',
 aliases: ['bankanal', 'banlog', 'ban-log'],
 permLevel: 0
};

exports.help = {
 name: 'ban-kanal',
 description: 'Birisi banulunca hangi kanala mesaj gideceğini ayarlarsınız.',
 usage: 'ban-kanal ayarla/sıfırla #kanal',
 kategori: '**AYARLAR**',
 permLvl: '**SUNUCUYU YÖNET**'
};