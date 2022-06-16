module.exports = {
    config: {
        name: 'status',
        aliases: [],
        category: 'moderation',
        description: 'Change the bot\'s Status',
        usage: '<status-message>',
        accessableby: 'Administrators'
    },
    run: async (client, message, args) => {
      if (!message.member.permissions.has("ADMINISTRATOR"))
        return message.channel.send(`You Do Not Have Permissions To Use This Command, ${message.author.username}`);        
        const status = args.join(' ');
        if (!status) return message.channel.send('Please provide the status you want me to set.');
        
        client.user.setActivity(status, {type: 'WATCHING'});
        return message.channel.send('Success, Bot\'s Status has been Changed')
    }
}