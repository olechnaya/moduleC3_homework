function printObjProp (obj) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        console.log(prop, obj[prop]);
      }
    }
  }

  myEntity = {
    name: 'Дракон',
    size: '27m',
    age: 1300,
    color: 'red'
  }
  
  printObjProp(myEntity)