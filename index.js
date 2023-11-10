let x1 = 5
let x2 = 15
let x3 = 40
let x4 = 10
let arr = [];
for (var i = 1; i <= x1; i++) arr.push(10000)
for (let i = 1; i <= x2; i++) arr.push(25000)
for (let i = 1; i <= x3; i++) arr.push(50000)
for (let i = 1; i <= x4; i++) arr.push(100000)

let summ = 0;
for (let i = 0; i < arr.length; i++) summ += Math.floor(arr[i] * 0.2)

// let summ = arr.reduce((acc, cur) => acc + Math.floor(cur * 0.2), 0);


console.log("Суммарные налоговые отчисления со всех зарплат: " + summ + " рублей")

let average = Math.floor(summ / arr.length);

console.log("Средние налоговые отчисления на человека: " + average + " рублей")

/* Прогрессивная шкала налогооблажения
- первые 10 тыс. рублей зарплаты не облагаются налогом;
- следующие 10 тыс. рублей облагаются налогом со ставкой 10%;
- следующие 50 тыс. рублей облагаются налогом со ставкой 20%;
- всё что выше — со ставкой 50%. */

let summ1 = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] <= 10000) {
    summ1 += 0
  }
  else if (arr[i] <= 20000) {
    summ1 += Math.floor((arr[i] - 10000) * 0.1);
  }
  else if (arr[i] <= 50000) {
    summ1 += Math.floor((arr[i] - 20000) * 0.2 + 10000 * 0.1);
  }
  else if (arr[i] > 50000) {
    summ1 += Math.floor((arr[i] - 50000) * 0.5 + 30000 * 0.2 + 10000 * 0.1);
  }
}

/*
let summ1 = arr.reduce((acc, cur) => {
    if (cur <= 10000) return acc;
    else if (cur <= 20000) return acc + Math.floor((cur - 10000) * 0.1);
    else if (cur <= 50000) return acc + Math.floor((cur - 20000) * 0.2 + 10000 * 0.1);
    else return acc + Math.floor((cur - 50000) * 0.5 + 30000 * 0.2 + 10000 * 0.1);
}, 0);
*/

console.log("\n------\n")
console.log("Прогрессивная шкала налогообложения\n")
console.log("Суммарные налоговые отчисления со всех зарплат: " + summ1 + " рублей")

let average1 = Math.floor(summ1 / arr.length);

console.log("Средние налоговые отчисления на человека: " + average1 + " рублей")