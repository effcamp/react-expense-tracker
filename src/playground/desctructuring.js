// const person = {
//   name: 'Andrew',
//   age: 26,
//   location: {
//     city: 'Atlanta',
//     temp: 92
//   }
// };
// const { name: firstName = 'Anon', age } = person;
// console.log(`${firstName} is ${age}.`)
// const { city, temp: temperature } = person.location;
// console.log(`It's ${temperature} in ${city}.`)


// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   },
// };
// const {name: publisherName = 'Self Published'} = book.publisher;

// console.log(publisherName);


const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [street, city, state = 'New York', zip] = address;

console.log(`You are in ${city} ${state}.`)


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [type, , m] = item;

console.log(`A medium ${type} costs ${m}`)
