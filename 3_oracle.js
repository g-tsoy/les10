// тут задание по Оракулу

var ar = ['Совершенно точно', 'Определенно', 'Несомненно', 'Да', 'Можно на это смело рассчитывать', 'Как мне кажется, да', 'Скорее всего', 'Прогноз положительный', 'По всем признакам - да', 'Ответ как-то мутно выглядит, попробуй еще', 'Попробуй позже', 'Тебе сейчас лучше об этом не знать', 'Невозможно сейчас сказать что-то определенное', 'Сосредоточься и спроси меня опять', 'Я бы не стала на это рассчитывать', 'Мой ответ - нет', 'Мои источники все отрицают', 'Прогноз выглядит неутешительно', 'Сомнительно', 'Не мучай меня своими скучными вопросами, пожалуйста']

var ar_length = ar.length;

//for (var i = 0; i < ar_length; i++) {
//  console.log(i, ar[i]);
//}

var rand_number = Math.random()*(ar_length);
var round = Math.round(rand_number); 

console.log("На улице идет дождь?");
console.log(ar[round])
