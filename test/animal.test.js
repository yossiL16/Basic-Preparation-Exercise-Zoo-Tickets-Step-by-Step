import Animal from "../src/animal.js";
import Cat from "../src/cat.js";
import Dog from "../src/dog.js";
import Zoo from "../src/zoo.js";
import test from 'node:test';
import assert, { deepEqual, throws } from "node:assert";


test("Animal.eat() increases energy and never goes above 100", () => {
    const animal = new Animal("leo");
    animal.eat(50);
    assert.equal(animal.getEnergy(), 100);
    assert.throws(() => animal.eat("3"));
    assert.throws(() => animal.eat(-2));
})


test("Dog.speak() returns Woof! and Cat.speak() returns Meow!", () => {
    const cat = new Cat("mizi");
    const dog = new Dog("ralf");
    
    assert.equal(cat.speak(), "Meow!!!");
    assert.equal(dog.speak(), "Woof!!!");
});


test("Zoo.addAnimal() throws an Error when adding something that is not an Animal", () => {
    const zoo = new Zoo()

    assert.throws(() => zoo.addAnimal({name:"coco"}));
    assert.throws(() => zoo.addAnimal("new animal"));
});


test("Zoo.makeAllSpeak() returns the correct array in the correct order", () => {
    const zoo = new Zoo();

    zoo.addAnimal(new Dog("ralf"));
    zoo.addAnimal(new Cat("mizi"));

    assert,deepEqual(zoo.makeAllSpeak(), ["Woof!!!", "Meow!!!"])
})