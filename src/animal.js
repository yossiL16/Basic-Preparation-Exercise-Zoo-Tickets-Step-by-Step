export default class Animal {

    name;
    #energy;

    constructor(name) {
        this.name = name;
        this.#energy = 100;
    }

    getEnergy() {
        return this.#energy;
    }


    eat(amount) {
        if (typeof amount !== "number" || amount === undefined) {throw new Error("Error in filde")}
        if (amount <= 0) {throw new Error("amount cano't be below 0")}
        if (amount + this.#energy > 100) {
            this.#energy = 100
            return
        }
        this.#energy += amount
    }


    speak() {
        return "The animals say hello."
    }
}