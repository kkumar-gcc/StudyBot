const { SlashCommandBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('kick user')
        .addUserOption(option => option.setName('user').setDescription('The user to kick').setRequired(true))
        .addStringOption(option => option.setName('reason').setDescription('The reason for kicking,if any')),
    async execute(interaction) {
        const user = interaction.options.getUser('user');
        const reason = interaction.options.getString('reason');
        const guildMember = interaction.guild.members.cache.get(user.id);
        console.log(guildMember);
        if (guildMember) {
            
            await guildMember
                .kick(reason)
                .then((member) => {
                    interaction.reply(`${member.user} was kicked out.`)
                })
                .catch((err) => { 
                    console.log(err);
                    interaction.reply('no premissions') });
        }
     },
};