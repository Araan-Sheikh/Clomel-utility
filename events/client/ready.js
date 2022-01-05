module.exports = async bot => {
    console.log(`${bot.user.username} is available now!`)
    bot.user.setActivity(`c!help | araan_sheikh#4416`, {type: 'WATCHING' });
    
};
