// Discord.js dependencies
const discord = require('discord.js');
const client = new discord.Client();

module.exports = function(args, message, client, config){
  // Create RichEmbed to display + base properties
  const embed = new discord.RichEmbed();
    .setTitle('Tip Bot help');
    .setColor(0x22bb22); // Green

  // Test args and modify RichEmbed
  if (args[0] == undefined) {
    embed
      .setThumbnail(client.user.avatarURL)
      .addField(config.prefix + 'hello', 'Basic test command')
      .addField(config.prefix + 'ytho, myeyes, reee, butytho, eyebrows, whyyoulikethis, noneedtobeupset', 'Reaction images')
      .addField(config.prefix + 'error', 'The shitty meme that started it all')
      .addField(config.prefix + 'defcon', 'Current DEFCON status')
      .addField(config.prefix + 'alex', 'Reaction_image.png');
  } else if (args[0] == 'hello') {
    embed.addField(config.prefix + '!hello', 'Displays help for a tip');
  } else if (args[0] == 'ytho') {
    embed.addField(config.prefix + '!ytho', 'Tips a user BCH from your balance');
  } else if (args[0] == 'myeyes') {
    embed.addField(config.prefix + '!myeyes', 'Tip Bot will DM you a Bitcoin Cash address along with instructions on how to deposit to it');
  } else if (args[0] == 'reee') {
    embed.addField(config.prefix + '!reee', 'This will withdraw BCH from your balance and send it to the address listed, make sure that the address listed is correct or else you could lose your BCH!');
  } else if (args[0] == 'butytho') {
    embed.addField(config.prefix + '!butytho', 'This shows the amount of BCH Tip Bot has stored for your account');
  } else if (args[0] == 'eyebrows') {
    embed.addField(config.prefix + '!eyebrows', 'Tip Bot will DM you a Bitcoin Cash address along with instructions on how to deposit to it');
  } else if (args[0] == 'whyyoulikethis') {
    embed.addField(config.prefix + '!whyyoulikethis', 'Tip Bot will DM you a Bitcoin Cash address along with instructions on how to deposit to it');
  } else if (args[0] == 'noneedtobeupset') {
    embed.addField(config.prefix + '!noneedtobeupset', 'Tip Bot will DM you a Bitcoin Cash address along with instructions on how to deposit to it');
  } else if (args[0] == 'error') {
    embed.addField(config.prefix + 'deposit', 'Tip Bot will DM you a Bitcoin Cash address along with instructions on how to deposit to it');
  } else if (args[0] == 'defcon') {
    embed.addField(config.prefix + 'deposit', 'Tip Bot will DM you a Bitcoin Cash address along with instructions on how to deposit to it');
  } else if (args[0] == 'alex') {
    embed.addField(config.prefix + 'deposit', 'Tip Bot will DM you a Bitcoin Cash address along with instructions on how to deposit to it');
  }

    return;
  }

  // Display RichEmbed
  message.channel.send({embed});
}
