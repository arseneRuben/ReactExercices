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

function readData (fileName, id) {
    const datas = readDatas(fileName)

    const index = findIndex(datas, id)

    return datas[index]
}

function addData (fileName, data) {
    const datas = readDatas(fileName)

    datas.forEach(element => {
        if (element.id === data.id) {
            throw new Error('Element already exists')
        }
    })

    datas.push(data)
    saveDatas(fileName, datas)
}

function updateData (fileName, data) {
    const datas = readDatas(fileName)

    const index = findIndex(datas, data.id)

    datas[index] = data

    saveDatas(fileName, datas)
}

function findIndex (datas, id) {
    const index = datas.findIndex(function (element) {
        return element.id === parseInt(id)
    })

    if (index === -1) {
        throw new Error('Element not found')
    }

    return index
}

module.exports = {
    readDatas,
    readData,
    saveDatas,
    addData,
    updateData
}
