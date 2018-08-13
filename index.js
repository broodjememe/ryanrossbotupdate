const discord = require("discord.js")
const botConfig = require("./botconfig.json");

const bot = new discord.Client();


bot.on("ready", async () => {

    console.log(`${bot.user.username} is online!`)

    bot.user.setActivity("Singing", { type: "PLAYING" });

});


bot.on("message", async message => {

    // Als Ryan Ross bericht stuurt stuur dan return        
    if (message.author.bot) return;

    if (message.channel.type === "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);

    client.on('message', message => {
        
    if (message.content.toLowerCase() === 'hey')
        message.channel.send('Hey I got cheez whiz' + message.author);

    if (message.content.toLowerCase() === 'ryan babe')
        message.channel.send('Hey babe :heart:' + message.author);

    }

    if (command === `${prefix}info`) {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.RichEmbed()
            .setDescription("Bot Information")
            .setColor("#022147")
            .setThumbnail(botIcon)
            .addField("Bot Name", bot.user.username)
            .addField("Made on", bot.user.createdAt);

        return message.channel.send(botEmbed);

    }

    if (command === `${prefix}serverinfo`) {

        var icon = message.guild.iconURL;

        var serverEmbed = new discord.RichEmbed()
            .setDescription("Server Information")
            .setColor("#022147")
            .setThumbnail(icon)
            .addField("Bot Name", bot.user.username)
            .addField("You are joined at", message.member.joinedAt)
            .addField("Total Fans", message.guild.memberCount);

        return message.channel.send(serverEmbed);
    }

});


bot.login(botConfig.token);
