export default class CounterViewModel {
    incBtn;
    decBtn;
    display;

    constructor(model) {
        this.model = model
    }

    init() {
        this.display = document.getElementById('display')
        this.incBtn = document.getElementById('increment')
        this.decBtn = document.getElementById('decrement')

        this.incBtn.addEventListener('click', this.increment.bind(this))
        this.decBtn.addEventListener('click', this.decrement.bind(this))
    }

    increment() {
        this.model.inc()

        this.display.value = this.model.count
    }

    decrement() {
        this.model.dec()

        this.display.value = this.model.count
    }
}
