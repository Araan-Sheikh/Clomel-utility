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
        .setDescription("\( + \) Added New Commands - `emojify` | `nitrogenerator` | `hug` | `hack`")
        .setFooter("DO NOT tell anyone about the nitrogenerator command, we have hacked into discord\'s database to make nitro codes for you guys")
        message.channel.send(embed)
    }
};