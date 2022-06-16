const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "contributers",
        aliases: [''],
        category: 'info',
        description: 'Shows credits',
        usage: '',
        accessableby: 'everyone'
    },
    run: async (bot, message, args) => {
            const embed = new MessageEmbed()
                .setTitle(`Contributers 💻 `)
                .setColor("RANDOM")
                .setDescription(`People those who have contributed to this project are :- \n \n • **araan_sheikh#4416**\n • **JayDev#7193**`)
                .setFooter(message.guild.name, message.guild.iconURL())
            message.channel.send(embed)
    }
};
