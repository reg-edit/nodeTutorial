const os = require('os') // no file path needed as inbuilt

// info about current user
const user = os.userInfo()


// method returns the system uptime in seconds
console.log(os.uptime())

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()

}

console.log(currentOS)