// Discord.js dependencies
const discord = require('discord.js');
const request = require('request');
const client = new discord.Client();

// Setup thumbnails for rich embeds
const status5 = new discord.Attachment('./resources/defcon/5.png', '5.png');
const status4 = new discord.Attachment('./resources/defcon/4.png', '4.png');
const status3 = new discord.Attachment('./resources/defcon/3.png', '3.png');
const status2 = new discord.Attachment('./resources/defcon/2.png', '2.png');
const status1 = new discord.Attachment('./resources/defcon/1.png', '1.png');

module.exports = function(args, message, client, config){
  // Create RichEmbed to display + base properties

  request('http://www.defconwarningsystem.com/code.dat', function (error, response, body) {
    console.log('DEFCON status requested')
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // DEFCON status.

    if (body == "5"){
      const embed = new discord.RichEmbed()
        .setTitle('DEFCON Status')
        .setColor(0x01FF11); // Green
      embed
        .attachFile(status5) // Attach image from attachement object to reference later on
        .setThumbnail('attachment://5.png') // Reference the attached file for use as thumbnail
        .setDescription('The current status is DEFCON 5 condition GREEN. There are no known imminent nuclear threats to the United States at this time.')
        .setURL('http://defconwarningsystem.com')
        .setFooter('This command is not meant to be a reliable source of information. Do NOT rely upon it in the event of an emegency.')
        message.channel.send({embed});

    } else if (body == "4"){
      const embed = new discord.RichEmbed()
        .setTitle('DEFCON Status')
        .setColor(0x012AFF); // Blue
      embed
        .attachFile(status4) // Attach image from attachement object to reference later on
        .setThumbnail('attachment://4.png') // Reference the attached file for use as thumbnail
        .setDescription('The current status is DEFCON 4 condition BLUE. No imminent nuclear threats to the US at this time, however, certain events are occuring in the world theater right now that require closer observation.')
        .setURL('http://defconwarningsystem.com')
        .setFooter('This command is not meant to be a reliable source of information. Do NOT rely upon it in the event of an emegency.')
        message.channel.send({embed});

    } else if (body == "3"){
      const embed = new discord.RichEmbed()
        .setTitle('DEFCON Status')
        .setColor(0xFFFB00); // Yellow
      embed
        .attachFile(status3) // Attach image from attachement object to reference later on
        .setThumbnail('attachment://3.png') // Reference the attached file for use as thumbnail
        .setDescription('The current status is DEFCON 3 condition YELLOW. Events of concern are occuring in the world theatre. There is no known immediate nuclear threat against the United States, however the situation is considered fluid.')
        .setURL('http://defconwarningsystem.com')
        .setFooter('This command is not meant to be a reliable source of information. Do NOT rely upon it in the event of an emegency.')
        message.channel.send({embed});

    } else if (body == "2"){
      const embed = new discord.RichEmbed()
        .setTitle('DEFCON Status')
        .setColor(0xFF6D00); // Orange
      embed
        .attachFile(status2) // Attach image from attachement object to reference later on
        .setThumbnail('attachment://2.png') // Reference the attached file for use as thumbnail
        .setDescription('The current status is DEFCON 2 condition ORANGE. Hostilities have or are about to break out. There is the possibility of a nuclear strike against the United States.')
        .addBlankField()
        .addField('IMPORTANT!','PLEASE TAKE TIME TO READ AND PRINT THIS GUIDE TO NUCLEAR SURVIVAL: http://www.ki4u.com/guide.pdf')
        .setURL('http://defconwarningsystem.com')
        .addBlankField()
        .setFooter('This command is not meant to be a reliable source of information. Do NOT rely upon it in the event of an emegency.')
        message.channel.send({embed});
        const guide = new discord.Attachment('./resources/defcon/guide.pdf');
        message.channel.send(guide);

    } else if (body == "1"){
      const embed = new discord.RichEmbed()
        .setTitle('DEFCON Status')
        .setColor(0xFE0000); // Red
      embed
        .attachFile(status1) // Attach image from attachement object to reference later on
        .attachFile('./resources/defcon/guide.pdf')
        .setThumbnail('attachment://1.png') // Reference the attached file for use as thumbnail
        .setDescription('The current status is DEFCON 1 condition RED. A nuclear attack against the United States is in progress or is considered to be highly likely. Updates will be given at 7 A.M and 7 P.M Pacific Time with immediate updates issued as the situation warrants. Updates for radiation will also be given at 7 A.M. and 7 P.M. Pacific Time. Immediate updates will be issued as the situation warrents.')
        .addBlankField()
        .addField('IMPORTANT!','IMMEDIATELY READ AND PRINT THIS GUIDE TO NUCLEAR SURVIVAL: http://www.ki4u.com/guide.pdf')
        .setURL('http://defconwarningsystem.com')
        .addBlankField()
        .setFooter('This command is not meant to be a reliable source of information. Do NOT rely upon it in the event of an emegency.')
        message.channel.send({embed});
        const guide = new discord.Attachment('./resources/defcon/guide.pdf');
        message.channel.send(guide);

    } else {
      const embed = new discord.RichEmbed()
        .setTitle('DEFCON Status')
        .setColor(0xAABBCC); // Red
      embed
        .setDescription('The current DEFCON status is unknown. This could be caused by a bug or an unhandled error.')
        .addField('HTTP Status Code:', response.statusCode)
        .addField('This might help:', error)
        .setURL('http://defconwarningsystem.com')
        .setFooter('This command is not meant to be a reliable source of information. Do NOT rely upon it in the event of an emegency.')
        message.channel.send({embed});
    }
  });
}
