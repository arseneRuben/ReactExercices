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
    }
    datas.push(data)
    saveDatas(fileName,datas)
}

const TEST_DATA = [
    { id: 100, userName: 'mvachon', age: 12 },
    { id: 101, userName: 'jcote', age: 66 },
    { id: 102, userName: 'pmartineau', age: 99 }
]
//saveDatas("text.json", TEST_DATA)
console.log(readDatas("text.json"))
addData("text.json", { id: 103, userName: 'vincent', age: 99 })
console.log(readDatas("text.json"))

