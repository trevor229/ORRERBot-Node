// Discord.js dependencies
const discord = require('discord.js');
const nHentaiAPI = require('nhentai-api-js');
let api = new nHentaiAPI();
const client = new discord.Client();
var artistName;
var tagString = "";

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

module.exports = function(args, message, client, config){
        api.g(args[0]).then(gallery => {
            var jsonData = JSON.stringify(gallery); // main /api/gallery/{book_id} output
            jsonData = JSON.parse(jsonData); // Parse the stringified data
            console.log(jsonData);

            randInt = getRndInteger(1,6)
            if (randInt == "1"){
                var embedColor = "0xad0000" // Red
            } else if (randInt == "2"){
                var embedColor = "0xdb7900" // Orange
            } else if (randInt == "3"){
                var embedColor = "0xfffb00" // Yellow
            } else if (randInt == "4"){
                var embedColor = "0x47e802" // Green
            } else if (randInt == "5"){
                var embedColor = "0x0044ff" // Blue
            } else if (randInt == "6"){
                var embedColor = "0x7600fc" // Purple
            }

            for(var i = 0; i < jsonData['tags'].length; i++) // Iterate through all the tags to find the artist and the actual genre tags
                {
                  if(jsonData['tags'][i]['type'] == "artist")
                  {
                    artistName = (jsonData['tags'][i]['name']); // Put the artist in the artistName variable to be used in the rich embed
                  }
                  if(jsonData['tags'][i]['type'] == "tag")
                  {
                    tagString += jsonData['tags'][i]['name']
                    tagString += ", "
                    console.log(tagString);
                  }
                }

            const embed = new discord.RichEmbed()
            .setTitle(jsonData['title']['pretty']) // Gets the pretty title from the API
            .setColor(embedColor);
        embed
            .addField("Uploaded on: ", new Date(jsonData['upload_date'] * 1000))
            .addField("Artist: ", artistName)
            .addField("Pages: ", jsonData['num_pages'])
            .addField("Favorites: ", jsonData['num_favorites'])
            .setThumbnail(gallery.getCover()) // Gets the full res cover from the API
            .setDescription(tagString.slice(0, tagString.lastIndexOf(",")))
            .setURL('http://nhentai.net/g/' + args[0])
            .setFooter('You fuckin weeb.')
            message.channel.send({embed});
            tagString = ""
        });       
}