String.prototype.isPalindrome = function() {
    const str = this;
    const reverseStr = str.split('').reverse().join('');

    if (reverseStr == str) {
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

    const average = sum / marks.length;

    let roundedAverage = Math.round(average);
    return roundedAverage;
}

let now = Date.now();
function checkBirthday(birthday) {
    const birthdayInMs = new Date(birthday).getTime();
    let diff = now - birthdayInMs;
    const msInYear = 31536000000;
    let age = diff / msInYear;
    return age >= 18
}