const TelegramApi = require("node-telegram-bot-api");


const token = '6575808375:AAG490WkNyHENr70BK48x8qgWCHdcAo3ED8'

const bot = new TelegramApi(token, { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id
    const text = msg.text

    if(text ==='/start') {
       await bot.sendMessage(chatId, `Ты написал мне ${text}`)
        reply_markup: JSON.stringify({
          inline_keyboard: [
            [{ text: "1", callback_data: "1" }, { text: "2", callback_data: "2" }, { text: "3", callback_data: "3" }],
            [{ text: "4", callback_data: "4" }, { text: "5", callback_data: "5" }, { text: "6", callback_data: "6" }],
            [{ text: "7", callback_data: "7" }, { text: "8", callback_data: "8" }, { text: "9", callback_data: "9" }],
            [{ text: "0", callback_data: "0" }]
          ],
        }),
      }

})