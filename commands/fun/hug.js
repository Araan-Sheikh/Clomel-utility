const { MessageEmbed } = require('discord.js');
const request = require('superagent');
module.exports = {
    config: {
        name: "hug",
        category: "fun",
        noalias: [''],
        description: "Hug someone",
        usage: "<user>",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {
        let ment = message.mentions.users.first();
        if(!ment) 
            return message.channel.send("Please mention a user");
        if (ment.id == message.author.id)
            return message.channel.send('How Is That Possible');
        if (ment.id == bot.user.id)
            return message.channel.send('Can you just piss off....');
        const { body } = await request.get('https://nekos.life/api/hug');
        let botico = bot.user.displayAvatarURL({ format: 'png' });
        let e = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${message.author.username} Hugged ${ment.username}`)
        .setImage(body.url)
        message.channel.send(e);
    },
};