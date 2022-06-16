const { MessageEmbed } = require('discord.js')
module.exports = {
    config: {
        name: "noticeboard",
        aliases: ['notice'],
        category: 'info',
        description: 'Bot Updates',
        usage: '[mention]',
        accessableby: 'everyone'
    },
    run: async (bot, message, args) => {
        message.delete();
        const embed = new MessageEmbed()
        .setTitle("Bot Updates | Notice Board")
        .setColor("RANDOM")
        .setDescription("**NEW UPDATE**\n \( + \) Added New Commands ")
        .setFooter("DO NOT tell anyone about the nitrogenerator command, we have hacked into discord\'s database to make nitro codes for you guys and it generates fake nitro LoL")
        message.channel.send(embed)
    }
};
