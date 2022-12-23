const fs = require('fs')

const ENCODING = 'UTF-8'
const option = {
    encoding: ENCODING,
    flag: 'w'
}


function readDatas(fileName) {
    return JSON.parse(fs.readFileSync(fileName, ENCODING))
}

function  readData(fileName, id){
    const datas = readDatas(fileName)
    const result = datas.filter(data => {
        return data.id === id
    })
    if(result.length===0) throw Error("Element not found")
    return result
}

function saveDatas (fileName, datas){
    fs.writeFileSync(fileName, JSON.stringify(datas), option)
}

function indexOf(datas, data){
    let i=0
    datas.forEach(item => {

        if(item.id===data.id){
            i++
        }
    })
    return i
}

function addData (fileName, data){
    const datas = readDatas(fileName)
    const checked = datas.filter(item => {
        return data.id === item.id
    })

    if(checked.length===0){
         datas.push(data)
         saveDatas(fileName,datas)
    } else {
        throw Error("Element already exists")
    }
}

function updateData (fileName, data){
    const datas = readDatas(fileName)
    const checked = datas.filter(item => {
        return data.id === item.id
    })

    if(checked.length===0){
        throw Error("Element not found")
    } else {
        datas.splice(indexOf(datas, data)+1, 1, data)
    }

    saveDatas(fileName,datas)
}


module.exports = {
    readData,
    readDatas,
    saveDatas,
    addData,
    updateData

}