// Import Discord.js
const discord = require('discord.js');
const client = new discord.Client();

// Main Body
module.exports = function(args, message, client, config){
    message.channel.send('YEET');
    const embed = new discord.RichEmbed()
      .setTitle('Hi!')
      .setColor(0xDEADBF); // Green
    embed
      .setDescription('This is the description of a Rich Embed')
      .setURL('http://google.com')
      .setFooter('This is the foorter of the embed!')
      message.channel.send({embed});
}
