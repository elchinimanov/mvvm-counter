export default class CounterModel {
    #count = 0

    inc() {
        this.#count += 1;
    }

    dec() {
        this.#count -= 1;
    }

    get count() {
        return this.#count
    }
}
