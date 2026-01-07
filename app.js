import Animal from "./src/animal.js";
import Dog from "./src/dog.js";
import Cat from "./src/cat.js";
import Zoo from "./src/zoo.js";

const animal = new Animal("leo");
const cat = new Cat("mizi");
const dog = new Dog("ralf");

console.log(dog.name, "says:", dog.speak());
console.log(cat.name, "says:", cat.speak());
console.log(animal.name, "says:", animal.speak());


console.log("\nEnergy before eating:", dog.getEnergy());
dog.eat(20);
console.log("Energy after eating:", dog.getEnergy());

const zoo = new Zoo();
zoo.addAnimal(dog);
zoo.addAnimal(cat);
zoo.addAnimal(animal);

console.log("\nZoo sounds:");
const sounds = zoo.makeAllSpeak();
console.log(sounds);

console.log("\nTrying to add invalid animal:");
try {
  zoo.addAnimal("not an animal");
} catch (err) {
  console.log("Error caught:", err.message);
}