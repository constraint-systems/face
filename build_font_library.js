let fs = require('fs')

let path = 'public/font-library'
let images = fs.readdirSync(path)
console.log(images)
fs.writeFileSync('public/library.json', JSON.stringify(images))
