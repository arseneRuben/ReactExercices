'use strict'

const nodeFs = require('.')
const assert = require('assert').strict
const TEST_FILE_NAME = 'test.json'
const TEST_DATA = [
    { id: 100, userName: 'mvachon', age: 12 },
    { id: 101, userName: 'jcote', age: 66 },
    { id: 102, userName: 'pmartineau', age: 99 }
]

nodeFs.saveDatas(TEST_FILE_NAME, TEST_DATA)
// console.log(nodeFs.readDatas(TEST_FILE_NAME))
// test  readDatas
assert.deepStrictEqual(TEST_DATA, nodeFs.readDatas(TEST_FILE_NAME))
// test  readData
assert.deepStrictEqual(
    { id: 100, userName: 'mvachon', age: 12 },
    nodeFs.readData(TEST_FILE_NAME, 100)
)
// test  updateData
/*
nodeFs.updateData(TEST_FILE_NAME, {
    id: 101,
    userName: 'Neymar Jr',
    age: 29
})
console.log(nodeFs.readDatas(TEST_FILE_NAME))

assert.deepStrictEqual(
    { id: 101, userName: 'Neymar Jr', age: 29 },
    nodeFs.readData(TEST_FILE_NAME, 101)
)
*/
// test  adData

nodeFs.addData(TEST_FILE_NAME)
const ABOUBAKAR = {
    id: 104,
    userName: 'Aboubakar',
    age: 30
}
assert.deepStrictEqual(ABOUBAKAR, nodeFs.readData(TEST_FILE_NAME, 104))
/*
try {
    //nodeFs.addData(TEST_FILE_NAME, { id: 103, userName: 'Alain', age: 109 })
    // console.log(nodeFs.readData(TEST_FILE_NAME, 103))

    nodeFs.updateData(TEST_FILE_NAME, {
        id: 101,
        userName: 'Neymar Jr',
        age: 29
    })
    console.log(nodeFs.readDatas(TEST_FILE_NAME))
    // nodeFs.updateData(TEST_FILE_NAME, { id: 102, userName: 'Frank-Lin', age: 35 })
    // console.log(nodeFs.readDatas(TEST_FILE_NAME))
} catch (error) {
    console.error(error)
}
*/
