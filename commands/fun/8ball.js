const { MessageEmbed } = require('discord.js');
const answers = require('../../data/8ball.json')

module.exports = {
    config: {
        name: "8ball",
        category: "fun",
        noalias: [''],
        description: "Ask the Bot",
        usage: "[question]",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {
       
        const question = args.join(" ")

        if(!question) {
            const eightBallError = new MessageEmbed()
            .setDescription('Please Provide a Question')
            .setColor('RANDOM')
            return message.channel.send(eightBallError)
        }
        const answer = answers[Math.floor(Math.random() * answers.length)];

        const embed = new MessageEmbed()
        .setTitle("8Ball")
        .setColor("RANDOM")
        .addField(`Your question:`, question)
        .addField(`My answer:`, answer);
        

        message.channel.send(embed);
        
    }
}