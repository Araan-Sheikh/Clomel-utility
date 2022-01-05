const got = require('got');
const Discord = require('discord.js')
module.exports = {
  config: {
      name: "meme",
      category: "fun",
      noalias: [''],
      description: "`Memes teheheheh`",
      usage: "",
      accessableby: "everyone"
  },
  run: async (bot, message, args) => {
    got('https://www.reddit.com/r/memes/random/.json').then(response => {
        let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let memeUrl = `https://reddit.com${permalink}`;
        let memeImage = content[0].data.children[0].data.url;
        let memeTitle = content[0].data.children[0].data.title;
        let memeUpvotes = content[0].data.children[0].data.ups;
        let memeNumComments = content[0].data.children[0].data.num_comments;

        let embed = new Discord.MessageEmbed()
        .setTitle(`${memeTitle}`)
        .setURL(`${memeUrl}`)
        .setColor('RANDOM')
        .setImage(memeImage)
        .setTimestamp()
        .setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`);
        message.channel.send(embed)
    }).catch(console.error);
      }
    }