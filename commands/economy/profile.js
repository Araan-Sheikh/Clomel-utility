const db = require('quick.db');
const { MessageEmbed } = require('discord.js')
module.exports = {
    config: {
        name: "profile",
        aliases: [],
        category: "economy",
        description: 'Show user\'s profile',
        usage: "",
        accessableby: 'everyone'
    },
    run: async (bot, message, args) => {
        let user = message.mentions.users.first() || message.author;
        let bal = db.fetch(`money_${user.id}`);
        if (bal === null) bal = 0;
        let bank = await db.fetch(`bank_${user.id}`);
        if (bank === null) bank = 0;
        let fetchInfo = await db.fetch(`info_${user.id}`)
        let fetchBg = await db.fetch(`bg_${user.id}`);
        if (fetchInfo === null) {
            fetchInfo = `<@${user.id}> has not set bio yet`
        }
        if (fetchBg === null) {
            fetchBg = "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
        }
        const embed = new MessageEmbed()
        .setTitle(`Economy Profile Info for ${user.tag}`)
        .setColor("RANDOM")
        .addField('__Economy Profile Info__', [
            `**Bio** : ${fetchInfo}`,
            `**Balance** - Pocket: ${bal} | Bank: ${bank}`
        ])
        .setThumbnail(`${fetchBg}`)
        message.channel.send(embed)
    }
}