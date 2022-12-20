'use strict'

function ObjetFonction( publicVariab) {

    let privateVariable = "Valeur privee"
    this.publicVariable = publicVariab



    this.getPrivateVariable= function() {
        return privateVariable
    }

    let privateFunction = function() {
        return "My private function"
    }

    this.executePrivateFunction = function() {
        return privateFunction();
    }

  
}
const objFct = new ObjetFonction( "valeur publique")
console.log(objFct.executePrivateFunction() , objFct.publicVariab );