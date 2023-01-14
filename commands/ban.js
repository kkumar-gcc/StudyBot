const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('ban user')
        .addUserOption(option => option.setName('user').setDescription('The user to ban').setRequired(true))
        .addStringOption(option =>
            option.setName('delete_messages')
                .setDescription('How much their recent message history to delete')
                .setRequired(true)
                .addChoices(
                    { name: 'Don\'t delete any', value: '0' },
                    { name: 'Previous hour', value: '1' },
                    { name: 'Previous 6 Hours', value: '2' },
                    { name: 'Previous 12 Hours', value: '3' },
                    { name: 'Previous 24 Hours', value: '4' },
                    { name: 'Previous 3 Days', value: '5' },
                    { name: 'Previous 7 Days', value: '6' },
                )
        )
        .addStringOption(option => option.setName('reason').setDescription('The reason for banning,if any')),
    async execute(interaction) {
        const user = interaction.options.getUser('user');
        const reason = interaction.options.getString('reason');
        const deleteMessages = interaction.options.getString('delete_messages');
        const guildMember = interaction.guild.members.cache.get(user.id);
        console.log(guildMember);
        if (guildMember) {
            await guildMember
                .ban({ deleteMessageSeconds: 60 * 60 * 24 * 7, reason: reason })
                .then((member) => {
                    interaction.reply(`${member.user} was banned.`)
                })
                .catch((err) => {
                    console.log(err);
                    interaction.reply('no premissions')
                });
        }
    },
};