/*Задача №1
Задана переменная word, передающая строковое значение. 
Сформируйте новую строку без символов “а” и “о” вне зависимости от регистра . 
Метод replace() использовать нельзя. */


let word = "Арнольд"; 
let result = ''; 
for (let i = 0; i < word.length; i++) { 
    if (word[i] == 'А' || word[i] == 'о') { 
        continue 
    }else{ 
        result += word[i]; 
    } 
} 
console.log(result);


/*Задача №2
Задана переменная num с числовым значением. Определите диапазон чисел от 1 до num, которые делятся на 3 без остатка. */

let num = 20;
for (let i = 1; i <= num; i++) {
if (i % 3 === 0) {
console.log(i);
}
}


/* Задача №3 
Задана переменная num c числовым значением. Используя цикл, создайте итерации, в которых с каждым разом будет конкатенировать каждую i-ую ступень по примеру: */

let num1 = 5;
let result1 = '';
for (let i = 1; i <= num1; i++) {
result1 += i;
console.log(result1);
}


/* Задача №4
Задана переменная num c числовым значением. Используя цикл, посчитайте сумму факториалов значений 1 до num */

let num2 = 4;
let sum2 = 0;
let factorial = 1;
for (let i = 1; i <= num2; i++) {
factorial *= i;
sum2 += factorial;
}
console.log(sum2);


/*Задача №5
создается цикл for в цикле for создается переменная i с значением 2 если переменная i < 12  то буду добавлять по 2
(тело цикла)если i  = 6 то i++*/

for (let i = 2; i < 12; i += 2) {
    if (i === 6) {
      i++;
    }
    console.log(i); 
  }


