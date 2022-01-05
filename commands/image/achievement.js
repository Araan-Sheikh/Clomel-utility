const snekfetch = require('snekfetch');

module.exports = {
  config: {
    name: "achievement",
    aliases: ["minecraft"],
    category: "image",
    description: "Achievement unlocked",
    usage: "<item> <text>",
    accessableby: "everyone"
  },
  run: async (bot, message, args) => { 
    const type = args.slice(0)
    if (!type) {
      message.reply("Please specify a number from 1 - 40 then specify a message\n **Note that abusing this command into breaking any server rules will only get you blacklisted from the bot and warned / banned**")
    } 
    const text = args.slice(1).join(' ');
    if (!text) {
      message.reply("Please specify a number from 1 - 40 then specify a message\n **Note that abusing this command into breaking any server rules will only get you blacklisted from the bot and warned / banned**")
    } 
      const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${type}&h=Achievement Get!&t=${text}`;
      snekfetch.get(url).then(r=>message.channel.send("", {files:[{attachment: r.body}]}));
    }
};