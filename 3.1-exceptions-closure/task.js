// Задача 1

function parseCount(string) {
    const number = Number.parseInt(string);
    if (isNaN(number)) {
        throw new Error('Невалидное значение');
    }
    return number;
}

function validateCount(value) {
    try {
        return parseCount(value);  
    } catch(e) {
        return e;
    }
}

// Задача 2


class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if ((a + c) < b) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    getPerimeter() {
        if (this.a === 0 || this.b === 0 || this.c === 0) {
            return 'Ошибка! Треугольник не существует';
        }
        let perimeter = this.a +this.b + this.c;
        return perimeter;
    }

    getArea() {
        if (this.a === 0 || this.b === 0 || this.c === 0) {
            return 'Ошибка! Треугольник не существует';
        }
        let p = (this.a + this.b + this.c) / 2;
        let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        let area = s.toFixed(3);
        return area;
    }
    
}

function getTriangle (a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        return new Triangle(0, 0, 0);
    }
}
    