const fs = require('fs')

fs.appendFile('file.txt', 'this is my text', (err) => {
  if (err) throw err
  else console.log('Updated')
})

fs.writeFile('file.txt', '21:37 ', (err) => {
  if (err) throw err
  else console.log('Replaced')
})

fs.rename('file.txt', 'newFile.txt', (err) => {
  if (err) throw err
  else console.log('Renamed')
})

const rs = fs.createReadStream('./newFile.txt')
rs.on('open', () => {
  console.log('newFile opened');
})

/* fs.unlink('', (err) => {
  if (err) throw err
  else console.log('deleted')
}) */