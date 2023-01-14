module.exports = {
    name: 'guildMemberAdd',
    async execute(guildMember) {
      await guildMember.guild.channels.cache.get('995931138398892134').send({ content: `Welcome to the ${guildMember.guild}, ${guildMember.user}! please read ${guildMember.guild.channels.cache.get('1023034010789748736').toString()}`})
    },
};
