//Класс электроприбор
// Метод: включить
// Метод: выключить

function Device(name, ec) {
    this.name = name
    this.ec = ec
    this.isPlugged = false
}

Device.prototype.plugIn  = function(){
    console.log(`${this.name} включён в розетку`)
    this.isPlugged = true
}

Device.prototype.plugOff  = function(){
    console.log(`${this.name} отключён от розетки`)
    this.isPlugged = false
}


//Класс-наследник: ноутбук
// Свойство: имя
// Свойство: тип 
// Свойство: электропотребление
// Свойство: цвет 
function LapTop(name, type, ec, color){
    this.name = name
    this.type = type
    this.energyConsumption = `${ec}кВт⋅ч`
    this.color = color
    this.isPlugged = true
}

// полиморфизм, наследуемся
LapTop.prototype = new Device()


// Класс-наследник: чайник
// Свойство: электропотребление
// Свойство: материал корпуса
function Kettle(name, ec, material){
    this.name = name
    this.energyConsumption = `${ec}кВт⋅ч`
    this.material = material
    this.isPlugged = true
}

// полиморфизм, наследуемся
Kettle.prototype = new Device()

olgasLapTop = new LapTop('Olgas laptop', 'для кодинга', 300, 'серебристый')
officeKettle = new Kettle('Чайник',1500, 'пластик')

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