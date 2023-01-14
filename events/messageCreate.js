const { SlashCommandBuilder } = require("discord.js");
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  organization: process.env.OPENAI_ORG_ID,
  apiKey: process.env.OPENAI_SECRET_KEY,
});
const openai = new OpenAIApi(configuration);
module.exports = {
  name: "messageCreate",
  async execute(message) {
    if (message.author.bot) return;
    console.log(message.content);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: message.content,
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
    });
    console.log(response.data);
    message.reply(response.data.choices[0].text);
  },
};
