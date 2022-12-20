'use strict'

function processMathCallback (val1, val2, callback) {
    const result = callback.execute(val1, val2)

    console.log('Valeur 1 = ' + val1)
    console.log('Valeur 2 = ' + val2)
    console.log('Opération = ' + callback.getOperation())
    console.log('Résultat = ' + result)
    console.log(' ')

    return result
}

const AdditionCallback = (function () {
    'use strict'
    const operation = "Addition"


    function execution(a,b){
        return a + b
    }

    function  getOperation() {
        return operation
    }

    return {
        execute: function (a, b) {
            return execution(a, b)
        }
        ,
        getOperation: function () {
            return getOperation()
        }
    }
})()

const SubtractionCallback = (function () {
    'use strict'
    const operation = "Soustraction"


    function execution(a,b){
        return a - b
    }

    function  getOperation() {
        return operation
    }

    return {
        execute: function (a, b) {
            return execution(a, b)
        }
        ,
        getOperation: function () {
            return getOperation()
        }
    }
})()


const DivisionCallback = (function () {
    'use strict'
    const operation = "Division"


    function execution(a,b){
        return a / b
    }

    function  getOperation() {
        return operation
    }

    return {
        execute: function (a, b) {
            return execution(a, b)
        }
        ,
        getOperation: function () {
            return getOperation()
        }
    }
})()


processMathCallback(2, 4, AdditionCallback)
processMathCallback(2, 4, SubtractionCallback)
processMathCallback(2, 4, DivisionCallback)



