const people = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

const freelancers = []


const addperson = (people, freelancers) => {
  let index = 0;

  const intervalId = setInterval(() =>{
    if(index < people.length) {
      freelancers.push(people[index]); // add a person from the original 
      index++; //move to next index 
    } else {
      clearInterval(intervalId); // stop interval when done 
    }
  }, 5000); // 5 seconds 
}

console.log(freelancers)


// const table = document.createElement(`table`)

// const tableRows = []

// for(let i=0; i<people.length; i++) {
//   const newTr = document.createElement(`tr`)
//   const tdName = document.createElement(`td`)
//   const tdOccupation = document.createElement(`td`)
//   const tdStatrtingPrice = document.createElement(`td`)
// }

// const person = people[i];
// const tableName = tdName.innerText = person.name;
// const tableOcc = tdOccupation = person.occupation;
// const tablePrice = tdStartingPrice.innerText = person.price;

// console.log(person)


