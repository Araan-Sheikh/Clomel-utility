module.exports = async bot => {
    console.log(`${bot.user.username} is available now!`)
    bot.user.setActivity(`on discord.gg/xorz`, {type: 'WATCHING' });
    
};