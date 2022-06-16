const db = require('quick.db');

module.exports = {
    config: {
        name: "disablemodlogchannel",
        aliases: ['dmc', 'disablem'],
        category: 'moderation',
        description: 'Disables Server Modlog Channel',
        usage: '[channel name | channel mention | channel ID]',
        accessableby: 'Administrators'
    },
    run: async (bot, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You cannot use this command")

        try {
            let a = db.fetch(`modlog_${message.guild.id}`)

            if (!a) {
                return message.channel.send('There Is No Modlog Channel Set To Disable')
            } else {
                let channel = message.guild.channels.cache.get(a)
                bot.guilds.cache.get(message.guild.id).channels.cache.get(channel.id).send("Welcome Channel Disabled!")
                db.delete(`modlog_${message.guild.id}`)

                message.channel.send(`Modlog Channel Has Been Successfully Disabled in \`${channel.name}\``)
            }
            return;
        } catch {
            return message.channel.send("ERR :x: - Missing Permissions / Channel Doesn't Exist")
        }
    }
}