const discord = require('discord.js');
require('dotenv').config();

const TOKEN = process.env.TOKEN;

const discordClient = new discord.Client({
    intents: [
        discord.GatewayIntentBits.Guilds,
        discord.GatewayIntentBits.GuildMessages,
        discord.GatewayIntentBits.MessageContent,
        discord.GatewayIntentBits.GuildVoiceStates
    ]
});

// Id channels
const WORK_CHANNEL_ID = '1454108061328347350';

discordClient.on('clientReady', () => {
    console.log(`Logged in as ${discordClient.user.tag}`);
});

discordClient.on('voiceStateUpdate', (oldState, newState) => {
    console.log('Voice state updated');
    if (!oldState.channelId && newState.channelId) {
        console.log(`${newState.member.user.tag} ha ingresado al canal de voz ${newState.channel.name}`);
        if(newState.channelId === WORK_CHANNEL_ID) {
            
        }
    }
});


discordClient.on('messageCreate', (message) => {
    console.log("Hola")
});

discordClient.login(TOKEN);