let slowo1 = `Кава`;
let slowo2 = `Чай`;
let slowo3 = `Сік`;
let promer = prompt(`Виберіть:Кава,Чай,Сік?`);
switch (promer) {
    case 'Кава':
        alert(`Ви вибрали` + slowo1)
        console.log(`Ви вибрали` + slowo1)
        break;
    case 'кава':
        alert(`Ви вибрали` + slowo1)
        console.log(`Ви вибрали` + slowo1)
        break;
    case 'Чай':
        alert(`Ви вибрали` + slowo2)
        console.log(`Ви вибрали` + slowo2)
        break;
    case 'чай':
        alert(`Ви вибрали` + slowo2)
        console.log(`Ви вибрали` + slowo2)
        break;
    case 'Сік':
        alert(`Ви вибрали` + slowo3)
        console.log(`Ви вибрали` + slowo3)
        break;
    case 'сік':
        alert(`Ви вибрали` + slowo3)
        console.log(`Ви вибрали` + slowo3)
        break;
    default:  console.log(`Ви нічого не вибрали!`);
}



let prome = prompt(`напишіть день тижня`);
switch (prome) {
    case 'Понеділок':
        alert(`Робочий день.`)
        console.log(`Список справ:багато`)
        break;
    case 'Вівторок':
        alert(`Робочий день.`)
        console.log(`Список справ:багато`)
        break;
    case 'Середа':
        alert(`Робочий день.`)
        console.log(`Список справ:багато`)
        break;
    case 'Четвер':
        alert(`Робочий день.`)
        console.log(`Список справ:багато`)
        break;
    case 'Пятниця':
        alert(`Робочий день.`)
        console.log(`Список справ:багато`)
        break;
    case 'Субота':
        alert(`Вихідний день.`)
        console.log(`Список справ:є але не багато.`)
        break;
    case 'Неділя':
        alert(`Вихідний день.`)
        console.log(`Список справ:немає.`)
        break;
    default:  console.log(`Ви нічого не написали!`);
}


let promery = prompt(`номер місяця`);
switch (promery) {
    case '1':
        alert(`Січень карсивий зимовий місяць`)
        console.log(`Січень карсивий зимовий місяць`)
        break;
    case '2':
        alert(`Лютий карсивий зимовий місяць`)
        console.log(`Лютий карсивий зимовий місяць`)
        break;
    case '3':
        alert(`Березень красивий весняний місяць`)
        console.log(`Березень красивий весняний місяць`)
        break;
    case '4':
        alert(`Квітень красивий весняний місяць`)
        console.log(`Квітень красивий весняний місяць`)
        break;
    case '5':
        alert(`Травень красивий весняний місяць`)
        console.log(`Травень красивий весняний місяць`)
        break;
    case '6':
        alert(`Червень красивий літній місяць`)
        console.log(`Червень красивий літній місяць`)
        break;
    case '7':
        alert(`Липень красивий літній місяць`)
        console.log(`Липень красивий літній місяць`)
        break;
    case '8':
        alert(`Серпень красивий літній місяць`)
        console.log(`Серпень красивий літній місяць`)
        break;
    case '9':
        alert(`Вересень красивий осінній місяць`)
        console.log(`Вересень красивий осінній місяць`)
        break;
    case '10':
        alert(`Жовтень красивий осінній місяць`)
        console.log(`Жовтень красивий осінній місяць`)
        break;
    case '11':
        alert(`Листопад красивий осінній місяць`)
        console.log(`Листопад красивий осінній місяць`)
        break;
    case '12':
        alert(`Грудень останній місяць року`)
        console.log(`Грудень останній місяць року`)
        break;
    default:  console.log(`Ви нічого не написали!`);
}


let promeri = prompt(`номер місяця`);
switch (promeri) {
    case '1':
        alert(`31 день`)
        console.log(`31 день`)
        break;
    case '2':
        alert(`28 днів`)
        console.log(`28 днів`)
        break;
    case '3':
        alert(`31 день`)
        console.log(`31 день`)
        break;
    case '4':
        alert(`30 днів`)
        console.log(`30 днів`)
        break;
    case '5':
        alert(`31 день`)
        console.log(`31 день`)
        break;
    case '6':
        alert(`30 днів`)
        console.log(`30 днів`)
        break;
    case '7':
        alert(`31 день`)
        console.log(`31 день`)
        break;
    case '8':
        alert(`31 день`)
        console.log(`31 день`)
        break;
    case '9':
        alert(`30 днів`)
        console.log(`30 днів`)
        break;
    case '10':
        alert(`31 день`)
        console.log(`31 день`)
        break;
    case '11':
        alert(`30 днів`)
        console.log(`30 днів`)
        break;
    case '12':
        alert(`31 день`)
        console.log(`31 день`)
        break;
    default:  console.log(`Ви нічого не написали!`);
}


let promere = prompt(`напишіть колір`);
switch (promere) {
    case 'Червоний':
        alert(`стоп`)
        console.log(`стоп`)
        break;
    case 'Жовтий':
        alert(`чекати`)
        console.log(`чекати`)
        break;
    case 'Зелений':
        alert(`йти`)
        console.log(`йти`)
        break;
    default: console.log(`Ви нічого не написали!`)
}


let operaton = prompt(`Введіть будь ласка значення`);
 let number1 = Number(prompt(`Введіть будь ласка перше число`));
 let number2 = Number(prompt(`Введіть будь ласка друге число`));
let calculate = (number1 + number2);
let calculat = (number1 - number2);
let calcula = (number1 * number2);
let calcul = (number1 / number2);
switch (operaton) {
    case '+':
        alert(calculate);
        break;
    case '-':
        alert(calculat);
        break;
    case '*':
        alert(calcula);
        break;
    case '/':
        alert(calcul);
        break;
    default: alert(`Упс щось пішло не так!`);
}
