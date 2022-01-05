const { MessageEmbed } = require('discord.js')
const ms = require('ms');
const { PREFIX } = require('../../config');
module.exports = {
    config: {
        name: "giveaway",
        description: "Creating giveaway",
        accessableby: "Administrator",
        category: "giveaway",
        aliases: ["giveaway-start"],
        usage: '<channel> <duration> <winners> <prize>'
    },
    run: async (bot, message, args) => {
        if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaway Hoster")){
            return message.channel.send(':x: ERR - You don\'t have permissions to host giveaways');
        }
    
        let giveawayChannel = message.mentions.channels.first();
        if(!giveawayChannel){
            return message.channel.send(`:x: ERR - Please Mention a Channel where you would like to host the giveaway. This is the Format to Host a Giveaway - \`${prefix}start #channel <Time> <NumberOfWinners> <Prize>\``);
        }
    
        let giveawayDuration = args[1];
        if(!giveawayDuration || isNaN(ms(giveawayDuration))){
            return message.channel.send(':x: ERR - Please Provide a Duration ( Example - 30s, 30m, 30h');
        }
    
        let giveawayNumberWinners = args[2];
        if(isNaN(giveawayNumberWinners) || (parseInt(giveawayNumberWinners) <= 0)){
            return message.channel.send(':x: ERR - Please Provide Number of Winners');
        }
    
        let giveawayPrize = args.slice(3).join(' ');
        if(!giveawayPrize){
            return message.channel.send(':x: ERR - Please Provide the Name of the Prize');
        }
    bot.giveawaysManager.start(giveawayChannel, {
        time: ms(giveawayDuration),
        prize: giveawayPrize,
        winnerCount: giveawayNumberWinners,
        hostedBy: message.author,
        messages: {
            giveaway: "🎉 **GIVEAWAY** 🎉",
            giveawayEnded: "🎊 **Giveaway Ended** 🎊",
            timeRemaining: "Time remaining: **{duration}**!",
            inviteToParticipate: "React with 🎉 to participate!",
            winMessage: "🎊 Congratulations!!, {winners}! You won the **{prize}**! 🎊",
            embedFooter: "🎉Giveaway[ Beta Phase ]🎊",
            noWinner: "Giveaway cancelled, no valid participations / Couldn\'t Determine Winner",
            hostedBy: "Hosted by: {user}",
            winners: "winner(s)",
            endedAt: "Ended at",
            units: {
                seconds: "seconds",
                minutes: "minutes",
                hours: "hours",
                days: "days",
                pluralS: false
            }
        }
    });
    message.channel.send(`Giveaway started in ${giveawayChannel}!`);
    }
}