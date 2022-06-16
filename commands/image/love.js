const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    config: {
        name: "love",
        noalias: ['ship'],
        category: "image",
        description: "Shipping between 2 people",
        usage: "[mention(1) | ID(1) | name(1) | nickname(1)] [mention(2) | ID(2) | name(2) | nickname(2)]",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {
        let user =  await message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        let user2 =  await message.mentions.members.array()[1] || message.guild.members.cache.get(args[1]);
        if(!user) return message.channel.send("Mention First User")
        if(!user2) return message.channel.send("Mention Second User")
        
        if (!user) return message.channel.send("bruh, mention a valid user")
        if (!user2) return message.channel.send("bruh, mention a valid user")

        let m = await message.channel.send("**Please Wait..**");
        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=ship&user1=${user.user.displayAvatarURL({ format: "png", size: 512 })}&user2=${user2.user.displayAvatarURL({ format: "png", size: 512 })}`));
            let json = await res.json();
            let attachment = new Discord.MessageAttachment(json.message, "love.png");
            message.channel.send(attachment);
            m.delete({ timeout: 5000 });
        } catch(e){
            m.edit("Error, Please Try Again! Mention Someone");
        }
    }
};