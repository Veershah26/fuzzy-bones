// Community Minimilastic Discord Bot

// 1. Moderation KICK/BAN/WARN
// 2. React to get roles
// 3. DashBoard For the Bot
// 4. Level Increase
// 5. Language Control (Block Abusive Texts)

// Import and declaration :D
'use strict';
require('dotenv').config();
const { Client } = require('discord.js');

// Creating Objects
const client = new Client({
  partials: ['MESSAGE', 'REACTION'],
});

// declaring for the bot
let PREFIX = '$';
let MODPREFIX = 'MD$';
client.on('ready', () => {
  const servers = client.guilds.cache.size;
  const users = client.users.cache.size;

  console.log(
    `Bot is now online and serving in ${servers} Server and ${users} users`
  );

  client.user.setActivity(`with unicorns!`, {
    type: 'PLAYING',
  });
});

const sep = (message) => {
  let CMD_NAME, args;
  return ([CMD_NAME, ...args] = message.content
    .trim()
    .substring(PREFIX.length)
    .split(/\s+/));
};

client.on('message', async (message) => {
  if (message.author.bot === true) return;
  if (message.content.startsWith(PREFIX)) {
    let [CMD_NAME, ...args] = sep(message);
    // console.log(CMD_NAME, args[1]);
  }
  if (
    message.content.startsWith(MODPREFIX) &&
    message.member.hasPermission('ADMINISTRATOR')
  ) {
    try {
      // switch ;
    } catch (error) {
      console.log(error);
    }
  }
});

client.login(process.env.DJSTOKEN);
