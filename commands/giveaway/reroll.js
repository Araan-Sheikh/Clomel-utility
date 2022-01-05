const { MessageEmbed } = require('discord.js')
const ms = require('ms');
module.exports = {
    config: {
        name: "reroll",
        description: "Rerolling giveaway winner",
        accessableby: "Administrator",
        category: "giveaway",
        aliases: ["giveaway-reroll"],
        usage: '<messagegiveawayid>'
    },
    run: async (bot, message, args) => {
       if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.channel.send(':x: You need to have the manage messages permissions to reroll giveaways.');
    }
    if(!args[0]){
        return message.channel.send(':x: You have to specify a valid message ID!');
    }
    let giveaway = 
    bot.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    bot.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);
    if(!giveaway){
        return message.channel.send('Unable to find a giveaway for `'+ args.join(' ') +'`.');
    }
    bot.giveawaysManager.reroll(giveaway.messageID)
    .then(() => {
        message.channel.send('Giveaway rerolled!');
    })
    .catch((e) => {
        if(e.startsWith(`Giveaway with message ID ${giveaway.messageID} is not ended.`)){
            message.channel.send('This giveaway is not ended!');
        } else {
            console.error(e);
            message.channel.send('An error occured...');
        }
    });

    }
}