const db = require('quick.db');
const { MessageEmbed } = require('discord.js');
const { PREFIX } = require('../../config')

module.exports = {
    config: {
        name: "setbackground",
        aliases: ['setbg'],
        category: "economy",
        description: 'Sets Profile Background',
        usage: "[upload Image]",
        accessableby: 'everyone'
    },
    run: async (bot, message, args) => {

        let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
        let user = message.author;
        let amount = 2000;
        let bal = await db.fetch(`money_${user.id}`)

        let newBg = message.attachments.first()
        let fetchBg = await db.fetch(`bg_${user.id}`);
        if (!newBg) {
            if (fetchBg) {
                return message.channel.send(`🖼️ Success - Profile Background Already Set As - \`${fetchBg}\` 🖼️`)
            } else {
                return message.channel.send("Upload an image")
            }
        }

        if (bal < amount) return message.channel.send(`You cannot afford profile background\nYou need - ${amount}`)
        db.subtract(`money_${user.id}`, amount)
        db.set(`bg_${user.id}`, newBg.url)

        let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(`🖼️ Success - Profile Background Already Set As`, user.displayAvatarURL())
            .setDescription(`\`${amount}\` has been deducted`)
            .setFooter(`${PREFIX}profile to view your profile`)
        return message.channel.send(embed)
    }
}