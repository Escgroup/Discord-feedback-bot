const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log(`Ready, ${client.user.tag}`);
    client.user.setActivity(
        "質問、意見箱です気軽にDMにメッセージを送信してください"
    );
});

client.on("message", message => {
    if (message.channel.type !== "dm" || message.author.bot) return;
    client.channels.get("623358810173603852").send({
        embed: {
            author: {
                name: message.author.tag,
                icon_url: message.author.avatarURL,
            },
            fields: [{ name: "Feedback内容", value: message.cleanContent }],
            timestamp: message.createdAt,
        },
    });
    return message.channel.send(
        "フィードバックを受け付けました、ありがとうございます。"
    );
});

client.login(process.env.TOKEN);
