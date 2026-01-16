
const typearray = new Int8Array(4) //directly craete array buffer via typearary 
const typearray2 = new Int8Array([1, 2, 3]) //can directly store number to array buffer
const typearary3 = new Int8Array([1, 2, 3, 4], { maxByteLength: 8 })// resize method not work with this typeed array
const arraybuffer = new ArrayBuffer(4, { maxByteLength: 8 }) // resize method only work with arraybuffer

const typearary4 = new Int8Array(arraybuffer)
typearray[0] = 1 //storing data 1 to at index 0 in buffer


//  const test = typearray2.transfer() // don't work with typeed array

const test = arraybuffer.transfer() // only work with array buffer


// arraybuffer.resize(3)//resizing array buffer to 3 bytes

console.log(typearray)
console.log(typearray2)
console.log(typearary3)
console.log(arraybuffer)//tranfer all data to test 
console.log(test)//showing data from arrraybuffer 