
//requiring path and fs modules
const path = require('path')
const fs = require('fs')
//joining path of directory
const directoryPath = path.join(__dirname, '../src')
//passsing directoryPath and callback function
fs.readdir(directoryPath, (err, files) => {
  //handling error
  if (err) {
    return console.log(`Unable to scan directory: ${err}`)
  }
  //listing all files using forEach
  files.forEach((file) => {
    const fileNameWithoutTest = file.replace('.test', '')
    const fnName = fileNameWithoutTest.replace('.js', '')
    const fileText = `export default function ${fnName}() {}\n`
    console.log(fileNameWithoutTest)
    fs.writeFile(`./src/${fileNameWithoutTest}`, fileText, (err) => {
      if (err) {throw err}
    })
  })
})
