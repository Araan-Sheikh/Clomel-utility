const { MessageEmbed } = require('discord.js')
module.exports = {
  config: {
      name: "vote",
      description: "Vote for the Bot",
      aliases: [],
      category: "info",
      usage: " ",
      accessableby: "everyone"
  },
  run: async(bot, message, args) => {
    const embed = new MessageEmbed()
      .setDescription('Vote now for some epic perks and get this cool role . :ok_hand: If you dont know the perks you can see them in support server. Click [here](https://top.gg/bot/926170638555680879/vote) to get the vote.')
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setColor("RANDOM")
      .setTimestamp()
      message.channel.send({
              embed: embed,
          })
  }
}
