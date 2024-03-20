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

const prices = []

const freelancerList = document.querySelector(`#infoContainer`); // selected the info container section on html
const maxPeople = 20; // sets max people to 8




// add freelancers to new array for display 
const addFreelancer = () => {
  const randomFreelancer = people[Math.floor(Math.random() * people.length)]; // randomizes a freelancer from our state
  people.push(randomFreelancer) // pushes into freelancers array 
  if (people.length === maxPeople){ // if max people are reached
    clearInterval(addFreelancerIntervalId) // clear interval 
  }
};

addFreelancerIntervalId = setInterval(addFreelancer, 5000); // set interval for 5 seconds
addFreelancer(); 



  
  //push person.price to new prices array
  //loop through new array and add all numbers together
  // divide the sum of the array by total number of elements in the array
  // return the quotient 
;

const render = () => {
    people.map((person) => {  // map through people 
      li = document.createElement(`li`);// create li element  
      newLi = li.innerText =`Name : ${person.name} --- Price:  ${person.price} --- Occupation : ${person.occupation}`;// set innertext to name, price and occupation  
      freelancerList.replaceChildren(newLi); //ul.replaceChilren with li elements 
      // console.log(newLi)
  }); 
};

render();

const getAverage = () => {
  people.map((lancer) => {
    prices.push(lancer.price);
  });

  let sum = 0 
  for (let i = 0; i < prices.length; i++){
    sum += prices[i];
  }
  return sum/prices.lenth 

};

console.log(getAverage());




