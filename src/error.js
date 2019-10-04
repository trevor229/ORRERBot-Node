// Import Discord.js
const discord = require('discord.js');
const client = new discord.Client();

// Main Body
module.exports = function(args, message, client, config){
    message.channel.send('*[ORRER}*');
    const attachment = new discord.Attachment('./resources/test.jpg');
        // Send the attachment in the message channel
        message.channel.send(attachment);
}
