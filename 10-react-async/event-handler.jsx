class EventHandler {
    constructor () {
        this.handleB = this.handleB.bind(this)

        this.handleE = (parameter) => (event) => this.existing(parameter, event)
    }

    handleA (event) {
        console.log(event)
    }

    handleB (event) {
        console.log(event, this)
    }

    handleC = (event) => {
        console.log(event, this)
    }

    handleD = (parameter) => (event) => {
        console.log(event, this, parameter)
    }

    existing = (parameter, event) => {
        console.log(event, this, parameter)
    }

    render () {
        return (
            <div>
                <div onClick={this.handleA}>A</div>
                <div onClick={this.handleB}>B</div>
                <div onClick={this.handleC}>C</div>
                <div onClick={this.handleD('parameter')}>D</div>
                <div onClick={this.handleE('parameter')}>E</div>
            </div>
        )
    }
}

export default Test
