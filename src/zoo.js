import Animal from "./animal.js";

export default class Zoo {

    #animal;

    constructor() {
        this.#animal = [];
    }

    addAnimal(animal) {
        if (!(animal instanceof Animal)) {
            throw new Error("Only Animal instances can be added to the zoo")
        }
        this.#animal.push(animal);
    }


    makeAllSpeak() {
        return this.#animal.map((anim) => anim.speak());
    }
}