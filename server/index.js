const TelegramApi = require("node-telegram-bot-api");

const token = "6575808375:AAG490WkNyHENr70BK48x8qgWCHdcAo3ED8";

const webAppUrl = 'https://ya.ru';

const bot = new TelegramApi(token, { polling: true });

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === "/start") {
    await bot.sendMessage(chatId, `заходи в наш интернет-магазин по кнопке ниже`, {
      reply_markup: {
        keyboard: [[{ text: 'Заполнить форму', web_app: {url: webAppUrl}}]],
      },
    });


    await bot.sendMessage(chatId, `Ниже появится кнопка, заполни форму`, {
      reply_markup: {
        inline_keyboard: [[{ text: 'Сделать заказ', web_app: {url: webAppUrl} }]],
      },
    });
  }
});
