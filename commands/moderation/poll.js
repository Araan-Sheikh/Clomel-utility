const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: "poll",
        description: "polling",
        category: "info",
        usage: "[poll-question]",
        noalias: "No Aliases",
        accessableby: "Administrator",
    },
    run: async (bot, message, args) => {
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send("You do not have permission to use this command");
        if (!args[0])
            return message.channel.send("Please enter a message");
        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`Poll${message.guild.name}`)
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setDescription(args.join(' '))
        var msg = await message.channel.send(embed);
        await msg.react('✅');
        await msg.react('❎');
        message.delete({ timeout: 1000 });
    }
}
