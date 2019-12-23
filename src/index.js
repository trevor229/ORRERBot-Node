// Import Discord.js
const discord = require('discord.js');
const client = new discord.Client();

// File system IO
const fs = require('fs');

// Check if config exists and generate template if false
if (!fs.existsSync('./config.json')) {
  fs.writeFileSync('./config.json', '{\n  \"token\": \"\",\n  "prefix": "!"\n}', 'utf8');
  console.log('Config not found, creating...');
  console.log('Please set your token in config.json!');
}

// Pull config info
var config = fs.readFileSync('./config.json');
config = JSON.parse(config);

// Store config values
var token = config.token;

// Ready message
client.on('ready', () => {
  console.log('ORRER bot loaded!');
  client.user.setPresence({ game: { name: '$orrerhelp' }, status: 'online' })
    .then(console.log)
    .catch(console.error)
});

// Commands
client.on('message', message => {
  // Check if message was not written by bot and starts with prefix
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;

  // Convert input into usable command with arguments in array
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase(); // Yeet the input to lowercase so all cases of the command work

  if (command == 'orrerhelp') {
    var cmd = require('./help.js')(args, message, client, config);
  }

  if (command == 'defcon') {
    var cmd = require('./defcon.js')(args, message, client, config);
  }

  if (command == 'hello') {
    var cmd = require('./hello.js')(args, message, client, config);
  }

  if (command == 'error' || command == 'orrer') {
    var cmd = require('./error.js')(args, message, client, config);
  }

  if (command == 'alex') {
    var cmd = require('./alex.js')(args, message, client, config);
  }

  if (command == 'trevor') {
    var cmd = require('./trevor.js')(args, message, client, config);
  }

  if (command == 'aiwhy' || command == 'ytho' || command == 'myeyes' || command == 'reee' || command == 'butytho' || command == 'eyebrows' || command == 'whyyoulikethis' || command == 'noneedtobeupset') {
    var cmd = require('./reactions.js')(command, args, message, client, config);
  }

  if (command == 'nhentai')
    var cmd = require('./nhentai.js')(args, message, client, config);
});

client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const attachment = new discord.Attachment('./resources/pics/fag.mp4');
  const channel = member.guild.channels.find(ch => ch.name === 'general');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
  channel.send(attachment);
});
// On server join
// client.on('guildCreate', guild => {
//  console.log('New server joined: ${guild.name} (id: ${guild.id}) ${guild.memberCount} members');
// });

// On removal from server
// client.on('guildDelete', guild => {
//  console.log('Removed from: ${guild.name} (id: ${guild.id})');
// });

client.login(token);
