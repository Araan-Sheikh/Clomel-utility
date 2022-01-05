const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
    config: {
        name: "addmoney",
        aliases: ["am"],
        category: "economy",
        description: "Adds Money to a user",
        usage: "[ mention | ID]",
        accessableby: "Administrator, Owner"
    },
    run: async (bot, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You cannot add money");
        if (!args[0]) return message.channel.send("Please mention user")

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!user) return message.channel.send("Please mention a valid user")
        if (!args[1]) return message.channel.send("Please specify an amount")
        if (isNaN(args[1])) return message.channel.send(`Please specify a valid amount`);
        if (args[0] > 10000) return message.channel.send("Cannot add more than 10000 coins at once")
        db.add(`money_${user.id}`, args[1])
        let bal = db.fetch(`money_${user.id}`)

        let moneyEmbed = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`✅ Success - ${args[1]} coins\n\nNew Balance: ${bal}`);
        message.channel.send(moneyEmbed)

    }
}