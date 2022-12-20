'use strict'

class ObjetClasse {
    #privateProperty = 'Propriété privée'

    #privateFunction () {
        return 'Méthode privée'
    }

    publicFunction () {
        return 'Méthode publique'
    }

    static staticFunction () {
        return 'Méthode statique'
    }

    executePrivateFunction () {
        return 'Méthode publique' +  ' - ' + this.#privateFunction()
    }
}

console.log(ObjetClasse.staticFunction())
console.log((new ObjetClasse()).executePrivateFunction())