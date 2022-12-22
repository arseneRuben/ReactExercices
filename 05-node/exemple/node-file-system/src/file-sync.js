const fs = require('fs')

try {
    const FILE_NAME = 'test-file.txt'
    const ENCODING = 'UTF-8'

    const data = 'AAAAAAAAAAAAAAA'
    const option = {
        encoding: ENCODING,
        flag: 'w'
    }

    fs.writeFileSync(FILE_NAME, data, option)

    const fileData = fs.readFileSync(FILE_NAME, ENCODING)
    console.log('File content: ', fileData)

    fs.unlinkSync(FILE_NAME)
} catch (error) {
    console.error(error)
}
