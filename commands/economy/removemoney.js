const { MessageEmbed }= require("discord.js");
const db = require("quick.db");

module.exports = {
    config: {
        name: "removemoney",
        aliases: ["rm"],
        category: "economy",
        description: "Removes money from a user",
        usage: "[ mention | ID]",
        accessableby: "Administrator, Owner"
    },
    run: async (bot, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR", "MANAGE_GUILD")) return message.channel.send("You cannot use this command");
        if (!args[0]) return message.channel.send("Please mention a user")

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!user) return message.channel.send("Please mention a valid user")

        if (!args[1]) return message.channel.send("Please specify an amount")
        if (isNaN(args[1])) return message.channel.send("Please specify a valid amount");
        let bal = await db.fetch(`money_${user.id}`)

        if (args[0] > bal) return message.channel.send("ERR :x: - I don't think mentioned user has that much")
        db.subtract(`money_${user.id}`, args[1])
        let bal2 = await db.fetch(`money_${user.id}`)

        let moneyEmbed = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`✅ Success - Removed ${args[1]} coins from mentioned user\n\nNew Balance: ${bal2}`);
        message.channel.send(moneyEmbed)

    }
}