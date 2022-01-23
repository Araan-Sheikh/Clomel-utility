const { MessageEmbed } = require('discord.js')
module.exports = {
  config: {
      name: "invite",
      description: "Invit the Bot. ",
      aliases: [],
      category: "exclusive",
      usage: " ",
      accessableby: "everyone"
  },
  run: async(bot, message, args) => {
    const embed = new MessageEmbed()
      .setDescription(`Click [here](https://discord.com/oauth2/authorize?client_id=926170638555680879&permissions=8&scope=bot) invite **CLOMEL UTILITY** to your server.\n Thank You for helping me achieve a milestone. \n \n **Currently this bot is being used by 100k+ users**`)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setColor("RANDOM")
      .setTimestamp()
      message.channel.send({
              embed: embed,
          })
  }
}
