// Задача 1

function getSolutions(a, b, c) {
    let d = b ** 2 - (4 * a * c);

    if (d < 0) {
        return { 
            D: d, 
            roots: [] 
        };
    } else if (d = 0) {
        let x1 = -b / (2 * a);
        return { 
            D: d, 
            roots: [x1] 
        };
    } else if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        return { 
            D: d, 
            roots: [x1, x2] 
        };
    }
}

function showSolutionsMessage(a, b, c) {
    let d = b ** 2 - (4 * a * c);
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}xU+00B2 + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${d}`);
    if (d < 0) {
        console.log("Уравнение не имеет вещественных корней");
    } else if (d === 0) {
        let x1 = -b / (2 * a);
        console.log(`Уравнение имеет один корень. X1 = ${x1}`);
    } else if (d > 0) {
        let x1 = -b / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        console.log(`Уравнение имеет два корня. X1 = ${x1}, X2 = ${x2}`);
    }
}

// Задача 2

function getAverageMark(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i]
    }
    return sum / marks.length;
}

function getAverageScore(data) {
    let finish = {};
    if (data = {}) {
        finish.average = 0;
        return finish;
    }
    let fullSum = 0;
    for (let prop in data) {
        fullSum += getAverageMark(data[prop]);
    }
    let lengthData = 0;
    for (prop in data) {
        if (prop) {
            lengthData++
        }
    }


    for (prop in data) {
        finish[prop] = getAverageMark(data[prop]);
    }
    finish.average = fullSum / lengthData;
    return finish;
}

// Задача 3

function getPersonData(secretData) {
    let Object = {
        firstName: getDecodedValue(),
        lastName: getDecodedValue()
    }
    return Object;
}

function getDecodedValue(secret) {
    if (secret = 0) {
        return "Родриго";
    } else if (secret = 1) {
        return "Эмильо";
    }
}

