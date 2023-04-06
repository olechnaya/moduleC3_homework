//Класс электроприбор
// Метод: включить
// Метод: выключить

class Device {
    constructor(name, ec){
        this.name = name
        this.ec = ec
        this.isPlugged = false
    }

    plugIn(){
        console.log(`${this.name} включён в розетку`)
        this.isPlugged = true
    }

    plugOff(){
        console.log(`${this.name} отключён от розетки`)
        this.isPlugged = false
    }
}

//Класс-наследник: ноутбук
// Свойство: имя
// Свойство: тип 
// Свойство: электропотребление
// Свойство: цвет 

class LapTop extends Device {
    constructor (name, type, ec, color){
        super(name, ec)
        this.color = color
        this.type = type
        this.isPlugged = true
    }
}

class Kettle extends Device {
    constructor(name, ec, material){
        super(name, ec)
        this.material = material
        this.isPlugged = true
    }
}


olgasLapTop = new LapTop('Olgas laptop', 'для кодинга', 300, 'фиолетовый')
officeKettle = new Kettle('Чайник',1500, 'нержавейка')

olgasLapTop.plugOff()
officeKettle.plugOff()

console.log(olgasLapTop)
console.log(officeKettle)

// Написать функцию, которая принимает число как аргумент и возвращает функцию, 
// которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.

/*function getSumFunction(a) {
    return function(b) {
        return a + b
    }
};

const sumFunction = getSumFunction(2);

const sum = sumFunction(3)

console.log(sum); // 5
*/