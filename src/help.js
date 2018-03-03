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
      .addField(config.prefix + 'tiphelp [command]', 'Displays this list or gives more info on a command')
      .addField(config.prefix + 'tip (amount) (@user)', 'Tips said amount to user')
      .addField(config.prefix + 'deposit', 'Tip Bot will DM you an address and QR code to deposit to')
      .addField(config.prefix + 'withdraw (amount) (address)', 'Withdraw BCH to your address')
      .addField(config.prefix + 'balance', 'Shows the amount of BCH on your account');
  } else if (args[0] == 'tiphelp') {
    embed.addField(config.prefix + 'tiphelp [command]', 'Displays help for a tip');
  } else if (args[0] == 'tip') {
    embed.addField(config.prefix + 'tip (amount) (@user)', 'Tips a user BCH from your balance');
  } else if (args[0] == 'deposit') {
    embed.addField(config.prefix + 'deposit', 'Tip Bot will DM you a Bitcoin Cash address along with instructions on how to deposit to it');
  } else if (args[0] == 'withdraw') {
    embed.addField(config.prefix + 'withdraw (amount) (address)', 'This will withdraw BCH from your balance and send it to the address listed, make sure that the address listed is correct or else you could lose your BCH!');
  } else if (args[0] == 'balance') {
    embed.addField(config.prefix + 'balance', 'This shows the amount of BCH Tip Bot has stored for your account');
  } else {
    return;
  }

  // Display RichEmbed
  message.channel.send({embed});
}
