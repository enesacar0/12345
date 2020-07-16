const Discord = require('discord.js');

exports.run = async(client, message) => {

    const rules = new Discord.RichEmbed()
    
      .setColor('RED')
      .addField(`Kurallar`, [`
      
       - Sunucuda herhangi bir oyucuya küfür hakaret yasaktır yetkisi alınıcaktır kalıcı olarak.!
      - Chat'de kavga yaratmak, diğer oyunculara laf atmak kışkırtmak yasaktır.!\n\n
       - Din, ırk ve siyaset konuşmak **yasaktır**!\n\n
	  - sebsiz bir şekilde oyuncu banlamanın cezası 1 yıldızdır her sebsiz bi şekilde bana atarsanız 1 yıldız alacaksınız 3 yıldızda yetkiniz alınıcaktır.\n\n
       - Herkes birbirine saygılı olmalıdır!\n\n
	  - Sesli odalarda reklam, link paylaşımı yasaktır.\n\n
       - Herkesin görüşü kendinedir bu yüzden tartışmak **yasaktır**!\n\n
      - Üstünlük göstermek/taslamak **yasaktır**!\n\n
       - Caps ve emoji kullanımı **yasaktır**! (Aşırı Olmadıkça)\n\n
      - Sunucuya bir hafta gelmeyen adminlerin yetkisi alınıcaktır.\n\n
       - Yetkililere karşı gelmek **yasaktır**!\n\n
	  - Cinsel, içerikli paylaşımlar yasaktır.\n\n
	   -Sohbet odalarında ve chat’de küfür, hakaret vb. etmek yasaktır.\n\n
	  - Bot basmak/j4j yapmak **yasaktır**!
       - Rahatsızlık vermek **yasaktır**! \n\n
	 - admin olduğunuz andan itibaren kuralları okumuş ve kabul etmiş sayılacaksınız, kurallara uyulmadığı ve uyarıların dikkate alınmadığı taktirde gerekli işlem yapılıcaktır. @Yüzbaşı ⭐ ⭐ ⭐



      `])

       message.delete();
      //message.react("🔴");

    return message.channel.send(rules).then(keleS => keleS.react("🔴"));

}

exports.conf = {
    enabled: true,
    guildOnly: false,
   kategori:'yetkili',
    aliases: ['rules'],
    permLevel: 0
}

exports.help = {
    name : 'kurallar',
    description: 'Hazır kuralları kanalınıza atar.',
    usage: '<prefix>kurallar/rules'
}
