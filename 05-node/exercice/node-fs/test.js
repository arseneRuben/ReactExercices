
'use strict'

const nodeFs = require ('.')

const TEST_FILE_NAME = 'test.json'
const TEST_DATA = [
    { id: 100, userName: 'mvachon', age: 12 },
    { id: 101, userName: 'jcote', age: 66 },
    { id: 102, userName: 'pmartineau', age: 99 }
]


nodeFs.saveDatas(TEST_FILE_NAME, TEST_DATA)
console.log(nodeFs.readDatas(TEST_FILE_NAME))



try {
    //nodeFs.addData(TEST_FILE_NAME, { id: 103, userName: 'Alain', age: 109 })
   // console.log(nodeFs.readData(TEST_FILE_NAME, 103))


    nodeFs.updateData(TEST_FILE_NAME, { id: 101, userName: 'Neymar Jr', age: 29 })
    console.log(nodeFs.readDatas(TEST_FILE_NAME))
   // nodeFs.updateData(TEST_FILE_NAME, { id: 102, userName: 'Frank-Lin', age: 35 })
   // console.log(nodeFs.readDatas(TEST_FILE_NAME))
} catch (error) {
    console.error(error)
}