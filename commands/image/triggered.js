const canvacord = require('canvacord');
const Canvacord = require('canvacord/src/Canvacord');
const {  MessageAttachment } = require('discord.js');

module.exports = {
  config: {
      name: "triggered",
      category: "image",
      noalias: [''],
      description: "`TRIGGERED`",
      usage: "",
      accessableby: "everyone"
  },
  run: async (bot, message, args) => {
      const member = message.mentions.users.first() || message.author;
        let avatar = member.displayAvatarURL({dynamic: false, format: "png"})

        let image = await Canvacord.trigger(avatar)

        let triggered = new MessageAttachment(image, "triggered.gif")

        message.channel.send(triggered)
    }
}