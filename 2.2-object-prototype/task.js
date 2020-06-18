String.prototype.isPalindrome = function(string) {
    let reverseString = string.split('').reverse().join('');

    if (reverseString === string) {
        return true;
    } else {
        return false;
    }
}

function getAverageMark(marks) {
    let mark;
    let sum = 0;
    for (mark of marks) {
        sum += mark;
    }

    let average = sum / marks.length;

    let roundedAverage = Math.round(average);
    return roundedAverage;
}

let now = Date.now();
function checkBirthday(birthday) {
    birthday = new Date(birthday).getTime();
    let diff = now - birthday;
    let msInYear = 31536000000;
    let age = diff / msInYear;
    if (age > 18) {
        result = "Да";
    } else {
        result = "Нет";
    }
}