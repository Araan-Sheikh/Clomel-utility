const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
    config: {
        name: "beg",
        noalias: [""],
        category: "economy",
        description: "Beg for money",
        usage: " ",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {
        var persons = [
            "from Clomel",
            "from Araan",
            "from Tumull",
            "from trump",
            "from biden",
            "from Elon Musk",
            "from Jaydev",
            "from President Om",
            "from Casual Chou"
        ]
        var person = Math.floor(Math.random() * persons.length);
        let user = message.author;

        let timeout = 100000;
        let amount = 25;

        let beg = await db.fetch(`beg_${user.id}`);

        if (beg !== null && timeout - (Date.now() - beg) > 0) {
            let time = ms(timeout - (Date.now() - beg));

            let timeEmbed = new MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`You are on a cooldown\n\n You can beg again in ${time.minutes}m ${time.seconds}s `);
            message.channel.send(timeEmbed)
        } else {
            let moneyEmbed = new MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`You've begged and got ${amount} coins ${persons[person]}`);
            message.channel.send(moneyEmbed)
            db.add(`money_${user.id}`, amount)
            db.add(`begs_${user.id}`, 1)
            db.set(`beg_${user.id}`, Date.now())


        }
    }
};
