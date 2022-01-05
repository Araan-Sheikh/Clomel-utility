const discord = require("discord.js")
const config = require("../../config.js")
const db = require("quick.db")

module.exports = {
    config: {
        name: "snipe",
        description: "Snipe last deleted command",
        usage: " ",
        category: "info",
        accessableby: "everyone",
        aliases: [""]
    },
    run: async (bot, message, args) => {
        let prefix = await db.fetch(`prefix_${message.guild.id}`)
        if(prefix == null) {
            prefix = config.DEFAULT_PREFIX
        }


        const msg = bot.snipes.get(message.channel.id)
        if(!msg) return message.channel.send("👀 I don\'t see anyone in my sight")
        const embed = new discord.MessageEmbed()
        .setAuthor(msg.author, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**Message Sniped:** ${msg.content}`)
        .setColor('RANDOM')
        .setTimestamp()
        if(msg.image)embed.setImage(msg.image)
        message.channel.send(embed)
    }
}
