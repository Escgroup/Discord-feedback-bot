const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log(`Ready, ${client.user.tag}`);
    client.user.setActivity("質問、意見箱です気軽にDMにメッセージを送信してください");
});

client.login(process.env.TOKEN);
