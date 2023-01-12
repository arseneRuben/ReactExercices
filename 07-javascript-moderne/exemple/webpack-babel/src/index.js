console.log(
    'Execution JavaScript du fichier main.js produit par webpack et chargé par le fichier index.html'
)

class Animal {
    constructor (name, voice) {
        this.name = name
        this.voice = voice
    }

    speak () {
        console.log(`The ${this.name} says ${this.voice}.`)
    }
}

const animal = new Animal('dog', 'woof')
animal.speak()
