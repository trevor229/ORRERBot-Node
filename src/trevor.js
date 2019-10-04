// Import Discord.js
const discord = require('discord.js');
const client = new discord.Client();

// Random integer function for random images
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Main body
module.exports = function(args, message, client, config){
    if (args[0] == undefined) {
      randInt = getRndInteger(1,23)
      const attachment = new discord.Attachment(`./resources/trevor/${randInt}.jpg`);
      message.channel.send(attachment);
    } else if (args[0] >= 1 && args[0] <= 23){
      const attachment = new discord.Attachment(`./resources/trevor/${args[0]}.jpg`);
      message.channel.send(attachment);
    } else {
      message.channel.send("Invalid Picture Number! Valid Numbers Are 1 through 23")
    }
}
