const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "credits",
        aliases: [''],
        category: 'info',
        description: 'Shows credits',
        usage: '',
        accessableby: 'everyone'
    },
    run: async (bot, message, args) => {
            const embed = new MessageEmbed()
                .setTitle(`Credits`)
                .setColor("RANDOM")
                .setDescription(`Made by araan_sheikh#4416 with 💖`)
                .setFooter(message.guild.name, message.guild.iconURL())
            message.channel.send(embed)
    }
};
