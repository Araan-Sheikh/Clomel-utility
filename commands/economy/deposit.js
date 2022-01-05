const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
    config: {
        name: "deposit",
        aliases: ["dep"],
        category: "economy",
        description: "Deposits money to bank",
        usage: "<amount>",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {

        let user = message.author;

        let member = db.fetch(`money_${user.id}`)

        if (args[0] == 'all') {
            let money = await db.fetch(`money_${user.id}`)

            let embedbank = new MessageEmbed()
                .setColor('RANDOM')
                .setDescription("👛 You don't have money in your pocket 👛")

            if (!money) return message.channel.send(embedbank)

            db.subtract(`money_${user.id}`, money)
            db.add(`bank_${user.id}`, money)
            let sembed = new MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`🏛️ Success - You have deposited all your coins into your bank 🏛️`);
            message.channel.send(sembed)

        } else {

            let embed2 = new MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`Please specify an amount`);

            if (!args[0]) {
                return message.channel.send(embed2)
                    .catch(err => message.channel.send(err.message))
            }
            let embed6 = new MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`Please specify a valid amount`)

            if(isNaN(args[0])) {
                return message.channel.send(embed6)
            
            }
            let embed3 = new MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`bruh you dumb?`);

            if (message.content.includes('-')) {
                return message.channel.send(embed3)
            }
            let embed4 = new MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`👛 You don't have that much in your pocket 👛`);

            if (member < args[0]) {
                return message.channel.send(embed4)
            }

            let embed5 = new MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`🏛️ Success - You have deposited ${args[0]} coins into your bank 🏛️`);

            message.channel.send(embed5)
            db.subtract(`money_${user.id}`, args[0])
            db.add(`bank_${user.id}`, args[0])

        }
    }
}