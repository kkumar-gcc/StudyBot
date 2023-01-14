module.exports = {
    name: 'guildMemberRemove',
    async execute(guildMember) {
        await guildMember.guild.channels.cache.get('1023035787970891867').send({ content: `Good bye ${guildMember.user}!`})
    },
};
