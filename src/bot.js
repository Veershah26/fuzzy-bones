'use strict';
require('dotenv').config();

client.on('ready', () => {
  const servers = client.guilds.cache.size;
  const users = client.users.cache.size;

  console.log(
    `Bot is now online and serving in ${servers} Server and ${users} users`
  );

  client.user.setActivity(`with unicorns!`, {
    type: 'SINGING',
  });
});

const makeGitHubCall = async (args, message) => {
  await axios
    .get(`https://api.github.com/users/${args[0]}`)
    .then((response) => {
      let data = response.data;
      console.log(data);
      const {
        login,
        avatar_url,
        html_url,
        url,
        name,
        followers,
        following,
        public_repos,
        public_gists,
        create_at,
        updated_at,
      } = data;
      const messageGitHubEmbed = new MessageEmbed()
        .setTitle(`GitHub Profile`)
        .setURL(html_url)
        .setImage(avatar_url)
        .addField('Username', login)
        .addField('Name', name)
        .addField('Repos', public_repos)
        .addField('Following', following)
        .addField('Followers', followers)
        .addField('Follow me here', html_url)
        .setFooter('GitHub Stats by Fuzzy Bones')
        .setTimestamp();
      message.channel.send(messageGitHubEmbed);
    })
    .catch((e) => {
      console.log(`ERROR: ${e}`);
    });
};
