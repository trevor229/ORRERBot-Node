// Discord.js dependencies
const discord = require('discord.js');
const client = new discord.Client();

// File system
const fs = require('fs');

// Check if config exists and generate template if false
if (!fs.existsSync('src/config.json')) {
  fs.writeFileSync('src/config.json', '{\n  \"token\": \"\",\n  "prefix": "!"\n}', 'utf8');
  console.log('Config not found, new config file made.');
  console.log('Please set your token in config.json!');
}

// Pull config info
var config = fs.readFileSync('src/config.json');
config = JSON.parse(config);

// Store config values
var token = config.token;

// Create qr and data folders if missing
if (!fs.existsSync('qr')){
    fs.mkdirSync('qr');
    console.log('QR folder made');
}
if (!fs.existsSync('data')){
    fs.mkdirSync('data');
    console.log('Data folder made');
}

// Ready message
client.on('ready', () => {
  console.log('ORRER bot loaded!');
  client.user.setActivity('$orrerhelp');
});

// Commands
client.on('message', message => {
  // Check if message was not written by bot and starts with prefix
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;

  // Convert input into usable command with arguments in array
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command == 'orrerhelp') {
    var tip = require('./help.js')(args, message, client, config);
  }

  if (command == 'defcon') {
    var tip = require('./defcon.js')(args, message, client, config);
  }

});

// On server join
client.on('guildCreate', guild => {
  console.log('New server joined: ${guild.name} (id: ${guild.id}) ${guild.memberCount} members');
});

// On removal from server
client.on('guildDelete', guild => {
  console.log('Removed from: ${guild.name} (id: ${guild.id})');
});

client.login(token);
