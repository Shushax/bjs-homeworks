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
      if (this.state >= 66) {
        return 'Состояние книги не может быть больше 100'
      }
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
      let j = 0;
        for (let i = 0; i < this.books.length; i++) {
          if (this.books[i].name === bookName) {
            let book = this.books.splice(i, 1);
            return book;
          }
          j++;
          if (j - 1 === this.books.length) {
            return null;
          }
        }
    }
}


// Задача 3

class StudentLog {
    constructor(name) {
      this.name = name;
      this.marks = {};
    }
  
    getName() {
      return this.name
    }
  
    addGrade(grade, subject) {
      if (!this.marks[subject]) {
        this.marks[subject] = [];
      }
      if (grade >= 1 && grade <= 5) {
        this.marks[subject].push(grade);
        return this.marks[subject].length;
      } else {
        console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
        return this.marks[subject].length;
      }
    } 
  
    getAverageBySubject(subject) {
      let sum = 0;
      let result = 0;
      if (this.marks[subject] && this.marks[subject].length) {
        for (let i = 0; i < this.marks[subject].length; i++) {
          sum += this.marks[subject][i];
          result = sum / this.marks[subject].length;
        }
      }
      return result;
    }
  
    getTotalAverage() {
      let sum = 0;
      let count = 0;
    
      for (let prop in this.marks) {
        for (let i = 0; i < this.marks[prop].length; i++) {
          sum += this.marks[prop][i];
          count ++
        }
      }
      let result = 0;
      if (count > 0) {
        result = sum / count
      }
      
      return result;
    }
  
}
