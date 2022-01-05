const { MessageFlags } = require("discord.js");

module.exports = {
    config: {
        name: "say",
        category: "moderation",
        aliases: [],
        description: "Make the bot say something",
        usage: "<message>",
        accessableby: "Administrators"
    },
    run: async (bot, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You don\'t have permission to use that.');
        let msg;
        message.delete()
        msg = args.join(" ");
        message.delete()
        if (!msg)return message.channel.send("Cannot send an empty message")
        message.channel.send(msg)
    }
};