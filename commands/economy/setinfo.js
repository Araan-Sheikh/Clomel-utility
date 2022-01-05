const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const { chunk } = require('../../functions');

module.exports = {
    config: {
        name: "setbio",
        aliases: ['setinfo'],
        description: "Set Profile Description",
        category: 'economy',
        usage: '[info]',
        accessableby: 'everyone'
    },
    run: async (bot, message, args) => {
        let user = message.author;
        if (!args[0]) {
            let fetchInfo = await db.fetch(`info_${user.id}`)
            if (fetchInfo) {
                let embed = new MessageEmbed()
                    .setColor("RANDOM")
                    .setAuthor('Info Is Already Set', message.author.displayAvatarURL())
                    .setDescription(`**${fetchInfo}**`)
                    .setFooter(message.guild.name, message.guild.iconURL())
                return message.channel.send(embed)
            }
        }
        let newInfo = args.join(' ');
        if (!newInfo) return message.channel.send('**Please Enter Your Info!**');
        if (newInfo.length > 1000) return message.channel.send(`**Max \`1000\` Characters Allowed!**`);
        let newsInfo = chunk(newInfo, 42).join('\n');
        db.set(`info_${user.id}`, newsInfo);

        let notesEmbed = new MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(`Your bio has been set`, message.author.displayAvatarURL())
            .setDescription(newsInfo)
            .setFooter(message.guild.name, message.guild.iconURL())
        message.channel.send(notesEmbed);
    }
};