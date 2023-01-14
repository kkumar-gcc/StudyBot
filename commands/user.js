const {
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  SelectMenuBuilder,
} = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("Replies with user info!")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("mention username")
        .setRequired(true)
    ),
  async execute(interaction) {
    const user = interaction.options.getUser("user");
    if (user) {
      await interaction.reply(`Username: ${user.username}\nID: ${user.id}`);
    } else {
      await interaction.reply(
        `Your username: ${interaction.user.username}\nYour ID: ${interaction.user.id}`
      );
    }
  },
};
