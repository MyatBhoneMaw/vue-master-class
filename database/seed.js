import { fakerEN_US as faker } from "@faker-js/faker";
//fakerEN_US is language 
//installed jaker.js



const personName = faker.person.fullName();
const personBio = faker.person.bio();

console.log("hi My name is" , personName , '. My bio is' , personBio);