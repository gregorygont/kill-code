//  *? Напишіть цикл, який виводить у консоль
//   *? числа від max до min за спаданням
//   *? Виведіть у консоль усіх парних чисел від min до max
const min = 19;
const max = 60;
for (let i = max; i >= min; i -= 1) {
  if (i % 2 === 0) {
    console.log(i);
  }
}