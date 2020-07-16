const Discord = require("discord.js");

module.exports.run = async (Octopus, message, args) => {
  let msg = await message.channel.send("Test Ediliyor.:white_check_mark:");
  let msg1 = await message.channel.send("Test Ediliyor..:white_check_mark:");
  let msg2 = await message.channel.send("Test Ediliyor...:white_check_mark:");
  let testembed = new Discord.RichEmbed()
  .setColor("0xe2ff00")
  .setDescription("Test Başarılı. Bot Çevrimiçi :sunglasses:")
  message.channel.send(testembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  kategori:'bot',
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'botkontrol'
};