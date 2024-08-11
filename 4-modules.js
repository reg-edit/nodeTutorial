// Modules  - Encapsulated Code (only sharee minimum)
// CommonJS, every file is module (by default)

const names = require('./3-names.js') //pulls any exported info
const data = require('./5-altFlavour.js')
require('./7-minegrenade.js') //runs the code

const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}

// sayHi(names.john)
// console.log(names)
// console.log(data)