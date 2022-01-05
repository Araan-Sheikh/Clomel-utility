const Discord = require('discord.js');
module.exports = {
    config: {
        name: "blush",
        category: "fun",
        noalias: [''],
        description: "`blushes`",
        usage: "[text]",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {
		let subreddits = ['https://cdn.weeb.sh/images/ryI1GLXDb.gif', 'https://cdn.weeb.sh/images/SkckMIXP-.gif','https://cdn.weeb.sh/images/rJa-zUmv-.gif','https://cdn.weeb.sh/images/B1J4GIQP-.gif','https://cdn.weeb.sh/images/B1NWGUmvb.gif']
		let sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
		/// sorry i deleted your is blushing because I wanted to add the markdown
		let embed = new Discord.MessageEmbed()
			.setDescription(`**${message.author.username} is blushing. >-<**`)
      .setColor('RANDOM')
			.setImage(sub)
			.setTimestamp();
		message.channel.send(embed).then(msg => msg.delete({ timeout:  12000 }));
	}
};