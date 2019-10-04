// Discord.js dependencies
const discord = require('discord.js');
const client = new discord.Client();

// Random integer function for random images
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

module.exports = function(command, args, message, client, config){
  if (command == "ytho"){
    const attachment = new discord.Attachment('./resources/pics/ytho.jpg');
    message.channel.send(attachment);
    console.log('ytho triggered')
  } else if (command == "myeyes"){
    const attachment = new discord.Attachment('./resources/pics/myeyes.gif');
    message.channel.send(attachment);
    console.log('myeyes triggered')
  } else if (command == "reee"){
      const attachment = new discord.Attachment('./resources/pics/reee.gif');
      message.channel.send(attachment);
      console.log('reee triggered')
  } else if (command == "butytho"){
      const attachment = new discord.Attachment('./resources/pics/butytho.gif');
      message.channel.send(attachment);
      console.log('butytho triggered')
  } else if (command == "whyyoulikethis"){
      const attachment = new discord.Attachment('./resources/pics/why.png');
      message.channel.send(attachment);
      console.log('whyyoulikethis triggered')
  } else if (command == "eyebrows"){
      randInt = getRndInteger(1,2)
      if (randInt == 2){
        const attachment = new discord.Attachment('./resources/pics/eyebrows2.gif');
        message.channel.send(attachment);
        console.log('eyebrows2 triggered')
      } else if (randInt == 1){
        const attachment = new discord.Attachment('./resources/pics/eyebrows1.gif');
        message.channel.send(attachment);
        console.log('eyebrows1 triggered')
      }
  } else if (command == "noneedtobeupset"){
      message.channel.send('https://www.youtube.com/watch?v=eY52Zsg-KVI');
      console.log('noneedtobeupset triggered')
  } else if (command == "aiwhy"){
      const attachment = new discord.Attachment('./resources/pics/aiwhy.jpg');
      message.channel.send(attachment);
      console.log('aiwhy triggered')
  } else {
      message.channel.send('That reaction does not exist!')
    }
  }
