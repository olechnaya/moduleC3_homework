function createObjWithoutProto() {
  return Object.create(null);
}

let entity = createObjWithoutProto()

console.log(entity)