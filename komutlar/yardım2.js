const Discord = require('discord.js')
let prefix = '!'
exports.run = async (client, message, keremdesu) => {
let kategori = keremdesu[0]
if(!kategori) return message.channel.send('𝙻𝚞𝚝𝚏𝚎𝚗 𝚋𝚒𝚛 𝚔𝚊𝚝𝚎𝚐𝚘𝚛𝚒 𝚐𝚒𝚛𝚒𝚗𝚒𝚣.\n 𝒚𝒆𝒕𝒌𝒊𝒍𝒊👨🏿‍💻 \n 𝒎𝒐𝒅𝒆𝒓𝒂𝒔𝒚𝒐𝒏👨🏿‍💻  \n  𝒆ğ𝒍𝒆𝒏𝒄𝒆👨🏿‍💻\n  𝒃𝒐𝒕👨🏿‍💻\n 𝒚𝒂𝒑ı𝒎ı𝒄ı👨🏿‍💻\n   ');
if(kategori === 'moderasyon' | kategori === 'yetkili' | kategori === 'eğlence'| kategori === 'bot'| kategori === 'yapımcı'){
let embed = new Discord.RichEmbed()
   .setAuthor(`${kategori} Komutları`)//keremdesu#0404
   .setTitle(`Örnek Kullanım: ${prefix}${client.commands.filter(c=>c.conf.kategori===kategori).random().help.name}`)//enesacar///
   .setDescription(client.commands.filter(c=>c.conf.kategori=== kategori).map(kmt=>kmt.help.name).join(', '))
  message.channel.send(embed)
  } else { message.channel.send('Kategori n\`moderasyon n\ yetkili   eğlence n\  bot n\ yapımcı` olmalı!') }};
  
  exports.conf = {
      enabled:true,
      guildOnly: true,
      kategori:'moderasyon',
      aliases:['help'],
      permLevel:0
    
  }
  
  exports.help = {
      name:`x`,
    description:`yardım`,
    usage:`yardım`
  }