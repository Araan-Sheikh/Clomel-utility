const Discord = require("discord.js");
const ownerid = ["875768640320962650"];
const ownerid2 = ["875768640320962650"];
const { MessageEmbed } = require('discord.js');

module.exports = {
  config: {
    name: "forcemessage",
    aliases: ["forcemsg"],
    category: "owner",
    description: "",
    usage: " ",
    accessableby: "Owner"
  },
  run: async (bot, message, args) => {
    if (message.author.id == ownerid || ownerid2) {
      message.delete();
          let channel = message.mentions.channels.first()
    if(!channel) {
        return message.channel.send(`mention channel please!`);
    }

    var args = message.content.split(' ').slice(2).join(' ');
 if(!args) {
     return message.channel.send(`you must spefic the message u want to send!`)
 }
    const embed = new MessageEmbed()
        .setColor("FF0000")
        .setTitle("Message From Bot Owner!")
        .setDescription(args)
        .setTimestamp()
        .setFooter('© Koni Bot Owner');
channel.send(embed)
    }
  }
};
