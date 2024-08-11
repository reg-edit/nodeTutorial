const {readFileSync, writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

// console.log(first, second)

// writeFileSync( // path and then string to create a new file
//     './content/result-sync.txt',
//     `here is the result : ${first}, ${second}`
// )

writeFileSync( // the flag 'a' means that each time this code is run it appends
    './content/result-sync2.txt',
    `here is the result : ${first}, ${second}`,
    {flag: 'a'}
)

console.log('done with this task')
console.log('starting the next one')