const fs = require('fs')

const FILE_NAME = 'test-file.txt'
const ENCODING = 'UTF-8'

const data = 'AAAAAAAAAAAAAAA'
const option = {
    encoding: ENCODING,
    flag: 'w'
}

function unlinkCallback (error) {
    if (error) {
        throw Error('Error deleting file: ' + error)
    }
}

function readFileCallback (error, fileContent) {
    if (error) {
        throw Error('Error reading file: ' + error)
    }

    console.log('File content: ', fileContent)

    fs.unlink(FILE_NAME, unlinkCallback)
}

function writeCallback (error) {
    if (error) {
        throw Error('Error writing file: ' + error)
    }

    fs.readFile(FILE_NAME, ENCODING, readFileCallback)
}

fs.writeFile(FILE_NAME, data, option, writeCallback)
