
'use strict'

const sgbd = require ('.')

const TEST_FILE_NAME = 'test.json'
const TEST_DATA = [
    { id: 100, userName: 'mvachon', age: 12 },
    { id: 101, userName: 'jcote', age: 66 },
    { id: 102, userName: 'pmartineau', age: 99 }
]


sgbd.saveDatas(TEST_FILE_NAME, TEST_DATA)
console.log(sgbd.readDatas(TEST_FILE_NAME))
console.log(sgbd.readDatas(TEST_FILE_NAME))
sgbd.addData(TEST_FILE_NAME, { id: 103, userName: 'Alain', age: 109 })
console.log(sgbd.readDatas(TEST_FILE_NAME))


try {
  //  console.log(sgbd.readDatas(TEST_FILE_NAME))

    sgbd.updateData(TEST_FILE_NAME, { id: 105, userName: 'vincent', age: 79 })
} catch (error) {
    console.error("erreur")
}