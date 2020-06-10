"use strict";
function getResult(a,b,c) {
    let discriminant = (b ** 2) - (4 * a * c);
    let x = [];
    if (discriminant === 0) {
        x = [-b / (2 * a)];
    } else if (discriminant > 0) {
        x.push((-b + (Math.sqrt(discriminant))) / (2 * a));
        x.push((-b - (Math.sqrt(discriminant))) / (2 * a));  
    }
    return x;
}

function getAverageMark(marks) {

    if (marks.length === 0) {
        return 0;
    } else if (marks.length > 5) {
        console.log("Количество оценок больше, чем 5. Обрезаем!");
        marks = marks.slice(0, 5); 
    }

      let sum = 0;
      for (let i = 0; i < marks.length; i++) {
        sum = sum + parseInt(marks[i]);
    }

    let averageMark = 0;
    averageMark = sum / marks.length;
 
    return averageMark;
    
}

function askDrink(name, dateOfBirthday){
    console.log(dateOfBirthday);
    let result = (new Date().getFullYear() - dateOfBirthday);
    let age = result;

    if (age > 18) {
        return "Не желаете ли олд-фэшн, " + name + "?";
    } else if (age < 18) {
        return "Сожалею, " + name + ", но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!";
    }
    return age;
}