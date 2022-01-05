const fishes = require('../../JSON/fishes.json');
let db = require('quick.db');
const ms = require("parse-ms");
const { randomRange } = require('../../functions');
const { MessageEmbed } = require('discord.js');
module.exports = {
    config: {
        name: 'fish',
        aliases: ['catchfish'],
        category: 'economy',
        description: 'Catch A Fish',
        usage: '(list)',
        acessableby: 'everyone'
    },
    run: async (bot, message, args) => {
        const { PREFIX } = require('../../config');

        let user = message.author;

        let bal = db.fetch(`money_${user.id}`)

        let fish = await db.fetch(`fish_${user.id}`)
        if (!args[0]) {
            if (bal === null) bal = 0;

            if (fish == null) fish = 0;

            const fishID = Math.floor(Math.random() * 10) + 1;
            let rarity;
            if (fishID < 5) rarity = 'trash';
            else if (fishID < 8) rarity = 'common';
            else if (fishID < 9) rarity = 'uncommon';
            else if (fishID < 10) rarity = 'rare';
            else rarity = 'legendary';
            const fishh = fishes[rarity];
            const worth = randomRange(fishh.min, fishh.max);

            let timeout = 125000;
            let fishtime = await db.fetch(`fishtime_${user.id}`);

            if (fishtime !== null && timeout - (Date.now() - fishtime) > 0) {
                let time = ms(timeout - (Date.now() - fishtime));

                let timeEmbed = new MessageEmbed()
                    .setColor("RANDOM")
                    .setDescription(`You are tired and you need a break\n\nFish again in ${time.minutes}m ${time.seconds}s `);
                return message.channel.send(timeEmbed)
            }

            let embed = new MessageEmbed()
                .setColor('RANDOM')
                .setDescription(`🎣 You got ${fishh.symbol} and it sold for ${worth}`)
                .setFooter(`'${PREFIX}fish list' to view the fishes near you`)
            message.channel.send(embed);

            db.add(`money_${user.id}`, worth);
            db.add(`fish_${user.id}`, 1);
            db.set(`fishtime_${user.id}`, Date.now())
        }
        if (args[0] === 'list') {

            let lEmbed = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle(`List Of fishes you can get`)
                .setDescription(`
\`\`\`🛢️Trash      :: Max Reward: 5, Min Reward: 1
🐠Common    :: Max Reward: 20, Min Reward: 10
🦈Uncommon  :: Max Reward: 40, Min Reward: 25
🐋Rare      :: Max Reward: 65, Min Reward: 45
🦑Legendary :: Max Reward: 100, Min Reward: 70\`\`\`
**Fishing System is based on random and luck**
​
`)
                .setFooter(message.guild.name, message.guild.iconURL())
            return message.channel.send(lEmbed);
        }
    }
}