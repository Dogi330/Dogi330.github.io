function showAge() {

  let age = prompt("Сколько вам лет?");
  let gender = prompt("Какой у вас пол? (мужской/женский)");
  age = parseInt(age);

  if (age >= 0 && age <= 17) {
    alert("Вам работать ещё рано — учитесь");
  } else if ((gender === "мужской" && age >= 18 && age <= 59) || (gender === "женский" && age >= 18 && age <= 54)) {
    alert("Вам ещё работать и работать");
  } else if ((gender === "мужской" && age >= 60 && age <= 64) || (gender === "женский" && age >= 55 && age <= 59)) {
    alert("Скоро пенсия!");
  } else if ((gender === "мужской" && age > 65) || (gender === "женский" && age > 60)) {
    alert("Вам пора на пенсию");
  } else {
    alert("Да кто ты такой?");
  }
}

function showCrows() {
    let num = prompt('Введите целое число:');
    if ((num%100>=5 && num%100 <=20)||(num%100==0))
        {
            alert(`На ветке сидит ${num} ворон`);
        }
        else if ((num%10>=2 && num%10<=4)&&!(num%100>=10 && num%100 <=20))
        {
            alert(`На ветке сидит ${num} вороны`);
        }
        else {
            alert(`На ветке сидит ${num} ворона`);
        }
}

function showNum() {
  let userInput;

  while (true) {
    userInput = prompt("Введите число, большее 100:");

    if (userInput === null) {
      return;
    }

    const num = parseInt(userInput);

    if (isNaN(num) || num <= 100) {
      alert("Введите значение большее 100.");
    } else {
      alert("Вы ввели" + num);
      break;
    }
  }
}

function prstNum() {
    let n = prompt("Введите число n:");
    n = parseInt(n);
  
    for (let i = 2; i <= n; i++) {
      let isPrime = true;
  
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
  
      if (isPrime) {
        console.log(i);
      }
    }
  }

  function generateTable() {
    const animals = ['dog', 'dog', 'dog', 'cat', 'cat'];
    const rows = prompt('Введите количество строк:');
    const table = [];
  
    for (let i = 0; i < rows; i++) {
      const row = [];
  
      for (let j = 0; j < 6; j++) {
        const index = (i * 6 + j) % animals.length;
        row.push(animals[index]);
      }
  
      table.push(row);
    }
  
    console.table(table);
  }