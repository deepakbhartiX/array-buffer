
const arraybuffer = new ArrayBuffer(4) // 4 bytes


const arraybuffer2 = new ArrayBuffer(4, { maxByteLength: 8 })//setting max byte to 8 which mean we can resize byte sizse in array buffer
arraybuffer.resize(3)//resizing array buffer to 3 bytes

const view = new DataView(arraybuffer) // use to acess data in arraybuffer

view.setInt8(0, 128) //setting data to buffer at 0 index with 128 data

console.log(view.getUint8(0)) // use to get element on index 0 in array buffer  'getUint8()' use for unsign mean only positive number can show or get from 1 to 255



//for conversion betweeen sign and unsign we use 2's compliment and add 1 to number and done. and change that number to binay we get a nagtive number in sign


console.log(view.getInt8(0)) // it is use for sign value or numbers which mean i can get or show positive and negetive vlalue betweem 128 to -128 