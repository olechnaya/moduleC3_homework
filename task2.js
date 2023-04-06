function checkPropInObj (str, obj) {
    if(str in obj) {
        console.log(`Свойство \'${str}\' в переданном объекте имеется`);
    }
  }

  myEntity = {
    name: 'Дракон',
    size: '27m',
    age: 1300,
    color: 'red'
  }
  
  checkPropInObj('age', myEntity)