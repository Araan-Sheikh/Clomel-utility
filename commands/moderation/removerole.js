const { MessageEmbed } = require("discord.js");
const db = require('quick.db');

module.exports = {
    config: {
        name: "removerole",
        category: "moderation",
        aliases: ["rr"],
        description: "Removes role from the user",
        accessableby: "Administrator",
        usage: "[name | nickname | mention | ID] <role>",
    },
    run: async (bot, message, args) => {

        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You cannot use this command");

        if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("I cannot use this command");
        
        if (!args[0]) return message.channel.send("Please mention a user")

        let rMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!rMember) return message.channel.send("I cannot find that member in guild");

        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]) || message.guild.roles.cache.find(rp => rp.name.toLowerCase() === args.slice(1).join(' ').toLocaleLowerCase());
        if (!args[1]) return message.channel.send("Please enter a role");

        if (!role) return message.channel.send("I cannot find that role in guild");

        if (rMember.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) return message.channel.send('Cannot Remove Role From This User - [Higher Than Me In Role Hierachy]')
        if (message.guild.me.roles.highest.comparePositionTo(role) < 0) return message.channel.send('Role Is Currently Higher Than Me Therefore Cannot Remove It From The User')
        if (role.managed) return message.channel.send("Cannot Remove That Role From This User")

        if (!rMember.roles.cache.has(role.id)) return message.channel.send("User Doesnt Has The Role")
        if (rMember.roles.cache.has(role.id)) await (rMember.roles.remove(role.id));

        const sembed = new MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(message.guild.name, message.guild.iconURL())
            .setDescription(`Role has been removed from ${rMember.user.username}`)
        message.channel.send(sembed);

        let channel = db.fetch(`modlog_${message.guild.id}`)
        if (!channel) return;

        const embed = new MessageEmbed()
            .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
            .setColor("RANDOM")
            .setThumbnail(rMember.user.displayAvatarURL({ dynamic: true }))
            .setFooter(message.guild.name, message.guild.iconURL())
            .addField("**Moderation**", "removerole")
            .addField("**Removed Role from**", rMember.user.username)
            .addField("**Role Added**", role.name)
            .addField("**Removed By**", message.author.username)
            .addField("**Date**", message.createdAt.toLocaleString())
            .setTimestamp();

        var sChannel = message.guild.channels.cache.get(channel)
        if (!sChannel) return;
        sChannel.send(embed)
    }
}