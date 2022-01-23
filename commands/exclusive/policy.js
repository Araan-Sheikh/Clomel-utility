const { MessageEmbed } = require('discord.js')
module.exports = {
  config: {
      name: "policy",
      description: "Vote for the Bot",
      aliases: [],
      category: "exclusive",
      usage: " ",
      accessableby: "everyone"
  },
  run: async(bot, message, args) => {
    const embed = new MessageEmbed()
      .setDescription(` **CLOMEL UTILITY PRIVACY POLICY**\n By using the bot you agree to our privacy policy \n
        **WHAT DATA DO WE STORE?**\n
        
    We do not collect any personal information relating your account like Passwords or any other Credentials. The data we collect includes the User IDs, Server IDs, Channel IDs and Some Role IDs. The bot never requests for any personal data of the users and any act that breaks the Tos of Discord is discouraged by us!\n
        **WHY WE NEED THIS DATA?**\n
        
    The data is required for the proper functioning of the bot features like Warning System, Logging and Autoroles. Without this data, our bot will not be able to perform these activities and thus making the features inaccessible for users\n
        **HOW DO WE USE THIS DATA?**\n
        
    The data is used for the proper functioning for theWarning System, Logging activities and Autorole features of our Bot. User IDs are used to identify the users, Channel IDs are used to send the messages to the desginated channels and Server IDs to identify the Servers and the Role IDs are used for the Autorole feature\n
        **HOW LONG DO WE STORE YOUR DATA?**\n
        
    The data is stored as long as the bot is in your Server and as soon as the bot is kicked or removed from the Server, the data is deleted and is no longer to accessable to anyone\n
        **WHO DO WE SHARE THE DATA WITH**?\n
        
    We never share your data with anyone except for [MongoDB Inc](https://mongodb.com) whom is a DataBase Company and all the data for our Bot is stored on the MongoDB Servers and According to MongoDB Inc. the data is only accessable by us.\n
        **GOT CONCERNS OR QUERIES?**\n
        
    If you have any concerns or queries relating our privacy policy or our bot or if you want your data to be removed, You can contact [araan_sheikh#4416](https://discord.com/users/875768640320962650) directy on our [Support Server](https://dsc.gg/clomel)!
    `)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setColor("RANDOM")
      .setTimestamp()
      message.channel.send({
              embed: embed,
          })
  }
}
