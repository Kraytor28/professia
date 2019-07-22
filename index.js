const TelegramBot = require ('node-telegram-bot-api')
const TOKEN = '906811228:AAGEd5m6mDtPAo7Snw7Az9xbVlHDDJL2Z0o'

const bot = new TelegramBot (TOKEN, {
    polling: {
        interval: 300,
        autoStart: true,
        params: {
            timeout: 10
        }
    }
});

bot.on ('message', msg => {
    if (msg.text.toLowerCase() === '/start') {
        bot.sendMessage(msg.chat.id, 'Приветствуем вас! Поздравляем, вы на верном пути! Ответьте на 6 вопросов. Это займет пару минут. Пройдите тест полностью и определите, готовы ли вы  получить онлайн-профессию и зарабатывать удалённо. В конце вас ждёт БОНУС! Нажмите "Далее", чтобы узнать первый вопрос.', {
            reply_markup: {
                keyboard: [
                    ['Далее'],
                ]
            }
        })
    } else if (msg.text === 'Далее') {
        bot.sendMessage(msg.chat.id, 'Вопрос 1. Хотите работать удаленно из любой точки мира?', {
            reply_markup: {
                keyboard: [
                    ['Да', 'Нет'],
                    ['Думаю']
                ]
            }
        })
    } else if (msg.text === 'Да') {
        bot.sendMessage(msg.chat.id, 'Вопрос 2. Зачем вам онлайн-профессия?', {
            reply_markup: {
                keyboard: [
                    ['Хочу уйти из офиса', 'Я в декрете, пригодится'],
                    ['Нужен доход','Ищу любимое дело']
                ]
            }
        })
    } else if (msg.text === 'Нет') {
        bot.sendMessage(msg.chat.id, 'Вопрос 2. Зачем вам онлайн-профессия?', {
            reply_markup: {
                keyboard: [
                    ['Хочу уйти из офиса', 'Я в декрете, пригодится'],
                    ['Нужен доход','Ищу любимое дело']
                ]
            }
        })
    } else if (msg.text === 'Думаю') {
        bot.sendMessage(msg.chat.id, 'Вопрос 2. Зачем вам онлайн-профессия?', {
            reply_markup: {
                keyboard: [
                    ['Хочу уйти из офиса', 'Я в декрете, пригодится'],
                    ['Нужен доход','Ищу любимое дело']
                ]
            }
        })
    } else if (msg.text === 'Хочу уйти из офиса') {
        bot.sendMessage(msg.chat.id, 'Воспрос 3. Сколько по времени в день вы готовы работать?', {
            reply_markup: {
                keyboard: [
                    ['Очень мало, до часа', '2-3 часа'],
                    ['Полный день']
                ]
            }
        })
    } else if (msg.text === 'Я в декрете, пригодится') {
        bot.sendMessage(msg.chat.id, 'Воспрос 3. Сколько по времени в день вы готовы работать?', {
            reply_markup: {
                keyboard: [
                    ['Очень мало, до часа', '2-3 часа'],
                    ['Полный день']
                ]
            }
        })
    } else if (msg.text === 'Нужен доход') {
        bot.sendMessage(msg.chat.id, 'Воспрос 3. Сколько по времени в день вы готовы работать?', {
            reply_markup: {
                keyboard: [
                    ['Очень мало, до часа', '2-3 часа'],
                    ['Полный день']
                ]
            }
        })
    } else if (msg.text === 'Ищу любимое дело') {
        bot.sendMessage(msg.chat.id, 'Воспрос 3. Сколько по времени в день вы готовы работать?', {
            reply_markup: {
                keyboard: [
                    ['Очень мало, до часа', '2-3 часа'],
                    ['Полный день']
                ]
            }
        })
    } else if (msg.text === 'Очень мало, до часа') {
        bot.sendMessage(msg.chat.id, 'Вопрос 4. Как часто вы можете быть на связи?', {
            reply_markup: {
                keyboard: [
                    ['Хоть весь день, телефон со мной'],
                    ['Иногда. Чаще ночью и в отдельные часы днём']
                ]
            }
        })
    } else if (msg.text === '2-3 часа') {
        bot.sendMessage(msg.chat.id, 'Вопрос 4. Как часто вы можете быть на связи?', {
            reply_markup: {
                keyboard: [
                    ['Хоть весь день, телефон со мной'],
                    ['Иногда. Чаще ночью и в отдельные часы днём']
                ]
            }
        })
    } else if (msg.text === 'Полный день') {
        bot.sendMessage(msg.chat.id, 'Вопрос 4. Как часто вы можете быть на связи?', {
            reply_markup: {
                keyboard: [
                    ['Хоть весь день, телефон со мной'],
                    ['Иногда. Чаще ночью и в отдельные часы днём']
                ]
            }
        })
    } else if (msg.text === 'Хоть весь день, телефон со мной') {
        bot.sendMessage(msg.chat.id, 'Вопрос 5. Как много времени вы проводите в Инстаграм?', {
            reply_markup: {
                keyboard: [
                    ['Редко, до часу в день','2-3 часа стабильно'],
                    ['Зависаю там постоянно']
                ]
            }
        })
    } else if (msg.text === 'Иногда. Чаще ночью и в отдельные часы днём') {
        bot.sendMessage(msg.chat.id, 'Вопрос 5. Как много времени вы проводите в Инстаграм?', {
            reply_markup: {
                keyboard: [
                    ['Редко, до часу в день','2-3 часа стабильно'],
                    ['Зависаю там постоянно']
                ]
            }
        })
    } else if (msg.text === 'Редко, до часу в день') {
        bot.sendMessage(msg.chat.id, 'Вопрос 6. Сколько вам необходимо зарабатывать в онлайне?', {
            reply_markup: {
                keyboard: [
                    ['Буду рада любым деньгам','100-200 долларов'],
                    ['От 300 долларов','Не меньше 1000 долларов']
                ]
            }
        })
    } else if (msg.text === '2-3 часа стабильно') {
        bot.sendMessage(msg.chat.id, 'Вопрос 6. Сколько вам необходимо зарабатывать в онлайне?', {
            reply_markup: {
                keyboard: [
                    ['Буду рада любым деньгам','100-200 долларов'],
                    ['От 300 долларов','Не меньше 1000 долларов']
                ]
            }
        })
    } else if (msg.text === 'Зависаю там постоянно') {
        bot.sendMessage(msg.chat.id, 'Вопрос 6. Сколько вам необходимо зарабатывать в онлайне?', {
            reply_markup: {
                keyboard: [
                    ['Буду рада любым деньгам','100-200 долларов'],
                    ['От 300 долларов','Не меньше 1000 долларов']
                ],
                one_time_keyboard: true
            }
        })
    }  else if (msg.text === 'Буду рада любым деньгам') {
        bot.sendMessage(msg.chat.id, 'У вас есть хорошие шансы! Пройдите бесплатные уроки в Академии онлайн-профессий и попробуйте работать удаленно', {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Бесплатные уроки',
                            url: 'https://akademiaonline.ru/lessons'
                        }
                    ]]
            }
        })
    } else if (msg.text === '100-200 долларов') {
        bot.sendMessage(msg.chat.id, 'У вас есть хорошие шансы! Пройдите бесплатные уроки в Академии онлайн-профессий и попробуйте работать удаленно', {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Бесплатные уроки',
                            url: 'https://akademiaonline.ru/lessons'
                        }
                    ]]
            }
        })
    } else if (msg.text === 'От 300 долларов') {
        bot.sendMessage(msg.chat.id, 'Вам прекрасно подходит удаленная работа. Пройдите бесплатные уроки от Академии онлайн-профессий и начинайте зарабатывать онлайн', {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Бесплатные уроки',
                            url: 'https://akademiaonline.ru/lessons'
                        }
                    ]]
            }
        })
    } else if (msg.text === 'Не меньше 1000 долларов') {
        bot.sendMessage(msg.chat.id, 'Вам прекрасно подходит удаленная работа. Пройдите бесплатные уроки от Академии онлайн-профессий и начинайте зарабатывать онлайн', {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Бесплатные уроки',
                            url: 'https://akademiaonline.ru/lessons'
                        }
                    ]]
            }
        })
    }

});