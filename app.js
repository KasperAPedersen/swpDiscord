const { Client, Events, GatewayIntentBits, MessageManager } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });


client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);

    client.user.setActivity("Swoopai.dk");
    client.user.setStatus("online");
});

// Log in to Discord with your client's token
client.login(token);