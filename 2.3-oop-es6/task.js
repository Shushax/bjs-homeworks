// Задача 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(newCondition) {
        if (newCondition < 0) {
            this._state = 0;
        } else {
            this._state = newCondition;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseData, pagesCount) {
        super(name, releaseData, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseData, pagesCount) {
        super(author, name, releaseData, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseData, pagesCount) {
        super(author, name, releaseData, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseData, pagesCount) {
        super(author, name, releaseData, pagesCount);
        this.type = 'detective';
    }
}

// Задача 2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
          if (this.books[i][type] === value) {
            return this.books[i];
          }
        }
        return null;
      }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                this.books[i].splice(i, 1);
                return this.books[i];
            } else {
                return null;
            }
        }
    }
}


// Задача 3

class StudentLog {
    constructor(name) {
        this.name = name;
        this.algebra = [];
        this.geometry = [];
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if (grade > 5 || grade < 1) {
            console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
            return this[subject].length;
        }

      this[subject].push(grade);

      return this[subject].length;
    }

    getAverageBySubject(subject) {
        if ([subject] === undefined) {
            return 0;
        }

        let sum = 0;
        for (let i = 0; i < this[subject].length; i++) {
            sum += this[subject][i];
        }
        const averageBySubject = sum / this[subject].length;
        return averageBySubject;
    }

    getTotalAverage() {
        if (this.algebra.length === 0 && this.geometry.length === 0) {
            return 0;
        }

        let quantityMarks = 0;
        let sumMarks = 0;
        for (let key in this) {
          if (Array.isArray(this[key])) {
            quantityMarks++;
            sumMarks += this.getAverageBySubject(this[key]);
           }
        } 

        const totalAverage = sumMarks / quantityMarks;

        return totalAverage;
    }
}