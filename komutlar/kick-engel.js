

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
const Discord = require('discord.js');
const data = require('quick.db')
exports.run = async (client, message, args) => {// chimp ᵈ♡#0110


let prefix = '!'// botun prefixi
const emb = new Discord.RichEmbed()
.setAuthor(client.user.username, client.user.avatarURL)
.setFooter(`${client.user.username}`)
.setTimestamp()
.setColor('BLUE')

if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(emb.setDescription(`Bu komutu kullanabimek için Yönetici yetkisine sahip olman gerekiyor.`))
if(!args[0]) return message.channel.send(emb.setDescription(`Bir argüman girmelisin: ${prefix}sağ-tık-kick aç/kapat/ayarla/sıfırla`))

if(args[0] === 'aç') {
const da = await data.fetch(`sağ.tık.kick.${message.guild.id}`)
if(da) return message.channel.send(emb.setDescription(`Sistem zaten açık.`))
const daa = await data.fetch(`sağ.tık.kick.kanal.${message.guild.id}`)
if(!daa) return message.channel.send(emb.setDescription(`Sistemin kanalı ayarlanmamış: ${prefix}sağ-tık-kick ayarla #kanal`))

data.set(`sağ.tık.kick.${message.guild.id}`, 'codare')
message.channel.send(emb.setDescription(`Sistem aktif edildi: Sağ tık kick atmaya çalışanların yetkisini alacağım.`)) }


if(args[0] === 'kapat') {
const da = await data.fetch(`sağ.tık.kick.${message.guild.id}`)
if(!da) return message.channel.send(emb.setDescription(`Sistem zaten kapalı.`))
const daa = await data.fetch(`sağ.tık.kick.kanal.${message.guild.id}`)
if(!daa) return message.channel.send(emb.setDescription(`Sistemin kanalı ayarlanmamış: ${prefix}sağ-tık-kick ayarla #kanal`))
  
data.delete(`sağ.tık.kick.${message.guild.id}`)
message.channel.send(emb.setDescription(`Sistem de-aktif edildi: Sağ tık kick atmaya çalışanların yetkisini artık almayacağım.`)) }


if(args[0] === 'ayarla') {
const daa = await data.fetch(`sağ.tık.kick.kanal.${message.guild.id}`)
if(daa) return message.channel.send(emb.setDescription(`Sistemin kanalı ayarlanmış <#${daa}>: ${prefix}sağ-tık-kick sıfırla`))

let kanal = message.mentions.channels.first()
if(!kanal) return message.channel.send(emb.setDescription(`Bir kanal etiketlemelisin.`))

await data.set(`sağ.tık.kick.kanal.${message.guild.id}`, kanal.id)
message.channel.send(emb.setDescription(`Sistemin kanalı ${kanal} olarak ayarlandı: Sağ tık kick atmaya çalışanların yetkisini aldığım da kanala mesaj göndereceğim.`)) }


if(args[0] === 'sıfırla') {
const da = await data.fetch(`sağ.tık.kick.${message.guild.id}`)
if(!da) return message.channel.send(emb.setDescription(`Sistem kapalı, o yüzden sıfırlayamıyorum.`))
const daa = await data.fetch(`sağ.tık.kick.kanal.${message.guild.id}`)
if(!daa) return message.channel.send(emb.setDescription(`Sistemin kanalı ayarlanmamış: ${prefix}sağ-tık-kick ayarla #kanal`))
  
message.channel.send(emb.setDescription(`Sistemin <#${daa}> olan kanalı sıfırlandı: Sağ tık kick atmaya çalışanların yetkisini aldığım da kanala mesaj göndermeyeceğim..`)) 
data.delete(`sağ.tık.kick.kanal.${message.guild.id}`)}

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  kategori:'yapımcı',
  aliases: ['sağtıkkick'],
  permLevel: 4
};

exports.help = {
  name: 'sağ-tık-kick'
};// 