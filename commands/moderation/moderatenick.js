const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js')

module.exports = {
    config: {
        name: "moderatenick",
        aliases: [],
        category: "moderation",
        description: "Moderate Nickname of a user",
        usage: "<user>",
        accessableby: "Administrator"
    },
    run: async (bot, message, args) => {
      var rating = Math.random().toString(36).substring(7);
      if(!message.member.hasPermission('MANAGE_NICKNAMES')) {
            const permerror = new MessageEmbed()
            .setDescription("You Don\'t Have Permissions To manage nicknames")
            .setColor('RANDOM')
            return message.channel.send(permerror)
      }
    let user = message.mentions.users.first()
    if(!user) {
            const userError = new MessageEmbed()
            .setDescription('Please mention a user')
            .setColor('RANDOM')
            return message.channel.send(userError)
        }
    let member = message.guild.members.cache.get(user.id);
    await member.setNickname(`ModeratedNickname ${rating}`);

    const nickembed = new Discord.MessageEmbed()
    .setTitle("Success ✔️")
    .setDescription(`Moderated ${user.tag}\'s nickname`)
    .setColor('RANDOM')
    .setTimestamp()
    message.channel.send(nickembed)
}
};