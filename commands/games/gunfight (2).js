const { delay, randomRange, verify } = require('../../functions');
const words = ['fire', 'draw', 'shoot', 'bang', 'pull', 'boom', 'clomel', 'doge', 'tumull'];

module.exports = {
    config: {
        name: 'gunfight',
        noalias: [''],
        category: 'games',
        usage: '[mention | username | nickname | ID]',
        description: 'Engage In A Gunfight Against Another User',
        accessableby: 'everyone',
    },

    run: async (bot, message, args, ops) => {
        if (!args[0]) return message.channel.send("Please mention a user")
        let opponent = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase());
        if (!opponent) return message.channel.send("Please mention a valid user")
        if (opponent.user.bot) return message.channel.send('You cannot participate in a gunfight with a bot');
        if (opponent.user.id === message.author.id) return message.channel.send('Bruh just shoot yourself, boom you dead');
        const current = ops.games.get(message.channel.id);
        if (current) return message.channel.send(`Please Wait Until The Current Game of \`${current.name}\` is Finished!`);
        ops.games.set(message.channel.id, { name: 'gunfight' });
        try {
            await message.channel.send(`${opponent}, Do You Accept This Challenge?`);
            const verification = await verify(message.channel, opponent);
            if (!verification) {
                ops.games.delete(message.channel.id);
                return message.channel.send(`Looks like ${opponent} Doesnt Wants To Play! what a coward`);
            }
            await message.channel.send('Get ready, finger on triggers cuz game will start anytime now');
            await delay(randomRange(1000, 10000));
            const word = words[Math.floor(Math.random() * words.length)];
            await message.channel.send(`TYPE \`${word.toUpperCase()}\` NOW TO SHOOT`);
            const filter = res => [opponent.user.id, message.author.id].includes(res.author.id) && res.content.toLowerCase() === word.toLocaleLowerCase();
            const winner = await message.channel.awaitMessages(filter, {
                max: 1,
                time: 30000
            });
            ops.games.delete(message.channel.id);
            if (!winner.size) return message.channel.send('No one won');
            return message.channel.send(`*The Winner is: ${winner.first().author}`);
        } catch (err) {
            ops.games.delete(message.channel.id);
            throw err;
        }
    }
};
