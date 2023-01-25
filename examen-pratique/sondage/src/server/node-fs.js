'use strict'

const fs = require('fs')

function saveDatas (fileName, datas) {
    const dataString = JSON.stringify(datas, null, 2)
    fs.writeFileSync(fileName, dataString, {})
}

function readDatas (fileName) {
    const datas = fs.readFileSync(fileName)
    return JSON.parse(datas)
}




module.exports = {
    readDatas,
    saveDatas
}
