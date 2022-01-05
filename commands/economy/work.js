const db = require('quick.db')
const { MessageEmbed } = require('discord.js')
const ms = require("parse-ms");
const Jwork = require('../../JSON/works.json');
const JworkR = Jwork[Math.floor(Math.random() * Jwork.length)];

module.exports = {
    config: {
        name: "work",
        aliases: ["wr"],
        category: "economy",
        description: "Work",
        usage: " ",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {

        let user = message.author;
        let author = await db.fetch(`work_${user.id}`)

        let timeout = 300000;

        if (author !== null && timeout - (Date.now() - author) > 0) {
            let time = ms(timeout - (Date.now() - author));

            let timeEmbed = new MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`You are tired and you need a coffee break...\n\nTry again in ${time.minutes}m ${time.seconds}s `);
            message.channel.send(timeEmbed)
        } else {
            let amount = Math.floor(Math.random() * 80) + 1;
            let embed1 = new MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`✅ **${JworkR} ${amount}**`)
            message.channel.send(embed1)

            db.add(`works_${user.id}`, 1)
            db.add(`money_${user.id}`, amount)
            db.set(`work_${user.id}`, Date.now())
        };
    }
};