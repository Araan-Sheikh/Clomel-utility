const Discord = require('discord.js');
var rating = Math.floor(Math.random() * 100);

module.exports = {
  config: {
      name: "gamerrate",
      category: "fun",
      noalias: [''],
      description: "Check your gamerrate",
      usage: "",
      accessableby: "everyone"
  },
  run: async (bot, message, args) => {
      var rating = Math.floor(Math.random() * 100);
        const gamer = new Discord.MessageEmbed()
          .setTitle(`${message.author.username}`)
          .setDescription(`You are ${rating} % Gamer`)
          .setColor('RANDOM')
        message.channel.send(gamer)
    }
};