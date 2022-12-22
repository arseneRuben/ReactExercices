
const fs = require('fs')
const FILE_NAME = 'test-file.txt'

function accessCallback (error) {
    if (error) {
        throw Error('Error accessing file: ' + error)
    }
}
fs.access(FILE_NAME, fs.constants.F_OK, accessCallback)

if (!fs.existsSync(FILE_NAME)) {
    throw Error('File not found: ' + FILE_NAME)
}
