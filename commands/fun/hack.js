const ms = module.require("ms");
var passwords = [
  "ILoveToes",
  "MonoMwah",
  "weeze",
  "IamaSimp",
  "iLikeMyFART",
  "IeatPoop",
  "password",
  "Thisismepass",
  "SafestPasswordInDaWorld"
]
module.exports = {
    config: {
        name: "hack",
        category: "fun",
        noalias: [''],
        description: "Hack someone",
        usage: "<user>",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {
      var password = Math.floor(Math.random() * passwords.length);
    if (!args[0]) {
    return message.channel.send("Dude, you cannot hack yourself, you have to mention someone")
    }
    const tohack = message.mentions.members.first()
    let msg = await message.channel.send(`[ 0% Done ] Hacking ${tohack.displayName}....`);

    let time = '1s'
    setTimeout(function(){
    msg.edit(`[ 0% Done ] Finding ${tohack.displayName}'s Email and Password.....`);
  }, ms(time));

    let time1 = '6s'
    setTimeout(function(){
    msg.edit(`✅ [ 35.4% Done ] Success\nE-Mail: \`${tohack.displayName}@gmail.com\` \nPassword: \`${passwords[password]}\``);
  }, ms(time1));

    let time2 = '9s'
    setTimeout(function(){
    msg.edit("[ 35.4% Done ] Finding Other Accounts.....");
  }, ms(time2));

    let time3 = '15s'
    setTimeout(function(){
    msg.edit("✅ [ 45.2% Done ] Success\nUninstalling Fortnite.....");
  }, ms(time3));

    let time4 = '21s'
    setTimeout(function(){
    msg.edit("✅ [ 69.420% Done ] Success\nWasting all the robux.....");
  }, ms(time4));

    let time5 = '28s'
    setTimeout(function(){
    msg.edit(`✅ [ 82% Done ] Success\nGetting ${tohack.displayName}'s Minecraft account banned.....`);
  }, ms(time5));

    let time6 = '31s'
    setTimeout(function(){
    msg.edit("✅ 94% Done ] Success\nBreaking Discord's TOS.....");
  }, ms(time6));

    let time7 = '38s'
    setTimeout(function(){
    msg.edit(`✅ [ 99% Done ] Success\nSelling Browser History to FBI ${tohack.displayName}'s Friends.....`);
  }, ms(time7));

    let time8 = '41s'
    setTimeout(function(){ 
    msg.edit(`[ 99% Done ] Just realised ${tohack.displayName} dosen\'t have any friends... ripp'`);
  }, ms(time8));

  let time9 = '45s'
    setTimeout(function(){ 
    msg.edit(`[ 99.9% Done ]\n||Injecting Trojan Virus||`);
  }, ms(time9));

  let time10 = '51s'
    setTimeout(function(){ 
    msg.edit(`✅ [ 100% Done ] Success\nHack Complete`);
  }, ms(time10));
  }
}