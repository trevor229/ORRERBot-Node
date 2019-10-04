// Discord.js dependencies
const discord = require('discord.js');
const client = new discord.Client();

module.exports = function(args, message, client, config){
  // Create RichEmbed to display + base properties
  const embed = new discord.RichEmbed()
        .setTitle('ORRERBot Help')
        .setColor(0x22bb22); // Green

  // Test args and modify RichEmbed
  if (args[0] == undefined) {
    embed
      .setThumbnail(client.user.avatarURL)
      .addField(config.prefix + 'hello', 'Basic test command')
      .addField(config.prefix + 'ytho, myeyes, reee, butytho, eyebrows, whyyoulikethis, noneedtobeupset', 'General reaction images')
      .addField(config.prefix + 'error/orrer', 'The shitty meme message that started it all')
      .addField(config.prefix + 'defcon', 'Current DEFCON status')
      .addField(config.prefix + 'alex', 'Alex reaction images')
      .addField(config.prefix + 'trevor', 'Trevor reaction images')
      .addField('Add command to "$orrerhelp" to recieve additional info on that command.', 'EX: $orrerhelp ytho');
  } else if (args[0] == 'hello') {
    embed.addField(config.prefix + 'hello', 'Test command. Output depends on what is being tested.');
  } else if (args[0] == 'ytho') {
    embed.addField(config.prefix + 'ytho', 'Why Tho reaction image');
  } else if (args[0] == 'myeyes') {
    embed.addField(config.prefix + 'myeyes', 'MY EYES! reaction image');
  } else if (args[0] == 'reee') {
    embed.addField(config.prefix + 'reee', 'REEEEEEEEEEEEEEEEEEEEEEE(action) image');
  } else if (args[0] == 'butytho') {
    embed.addField(config.prefix + 'butytho', 'But *y* Tho reaction image');
  } else if (args[0] == 'eyebrows') {
    embed.addField(config.prefix + 'eyebrows', '*raises eyebrows* reaction image');
  } else if (args[0] == 'whyyoulikethis') {
    embed.addField(config.prefix + 'whyyoulikethis', 'Why are you like this reaction image');
  } else if (args[0] == 'noneedtobeupset') {
    embed.addField(config.prefix + 'noneedtobeupset', 'Spinning seal with music video');
  } else if (args[0] == 'error' || args[0] == 'orrer') {
    embed.addField(config.prefix + 'error/orrer', 'Basically reprints the one message that spawned this entire bot.');
  } else if (args[0] == 'defcon') {
    embed.addField(config.prefix + 'defcon', 'Outputs the current DEFCON readiness level. Basically how close we are to nuclear war.');
  } else if (args[0] == 'alex') {
    embed.addField(config.prefix + 'alex', 'Outputs a random Alex reaction with no arguments. Add a number after for a specific image.');
  } else if (args[0] == 'trevor') {
    embed.addField(config.prefix + 'trevor', 'Outputs a random Trevor reaction with no arguments. Add a number after for a specific image.');
  } else {
    embed.addField('What did you say?', 'Sorry, ' + '"' + args[0] + '"' + " isn't a command I know!");
	}

  // Display RichEmbed
  message.channel.send({embed});
}
