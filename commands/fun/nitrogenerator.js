const { MessageEmbed } = require("discord.js")
const { PREFIX } = require('../../config');
const ms = module.require("ms");
var links = [
   `https://discord.gg/Hejs82hejdi9`,
   `https://discord.gg/ejf88rjcUw8i`,
   `https://discord.gg/aujtjc68Wisa`,
   `https://discord.gg/aueuhdjx8eo9`,
   `https://discord.gg/aytjx1juy8Wf`
    ];
   var images = [
   `https://cdn.discordapp.com/attachments/716917641209708647/748945266979242106/IMG_20200828_215650.jpg`,
   `https://cdn.discordapp.com/attachments/716917641209708647/748945228907413675/IMG_20200828_220208.jpg`
   ];
module.exports = {
  config: {
      name: "nitrogenerator",
      category: "fun",
      aliases: ['nitro', 'nitromaker', 'freenitro', 'bitro'],
      description: "Generate a nitro code",
      usage: "",
      accessableby: "everyone"
  },
  run: async (bot, message, args) => {
   let msg = await message.channel.send(`Starting code...\nNOTE: Do not report this to discord... they can take down this command`);
   let time = '5s'
    setTimeout(function(){
    msg.edit(`[ 0% Done ] Starting code...\nETA: May take upto 75 seconds to send code`);
  }, ms(time));

  let time1 = '15s'
    setTimeout(function(){
    msg.edit(`[ 30.8% Done ] Successfully hacked into discord\'s nitro database. Now entering one-time discord database login password\nETA: May take upto 60 seconds to send code`);
  }, ms(time1));

  let time2 = '30s'
    setTimeout(function(){
    msg.edit(`[ 60.4% Done ] Generating a nitro code and bypassing discord\'s firewall and security\nETA: May take upto 45 seconds to send code`);
  }, ms(time2));

  let time3 = '45s'
    setTimeout(function(){
    msg.edit(`[ 98.9% Done ] Nitro code received\nETA: May take upto 30 seconds to send code`);
  }, ms(time3));

  let time4 = '60s'
    setTimeout(function(){
    msg.edit(`<${links[Math.floor(Math.random()*links.length)]}>`);
  }, ms(time4))

  let time5 = '60s'
    setTimeout(function(){
    message.channel.send(`${images[Math.floor(Math.random()*images.length)]}`);
  }, ms(time5))
  }
};