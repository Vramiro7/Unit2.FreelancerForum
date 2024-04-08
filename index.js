const freelancer = [];

const prices = {

}

const people = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" }
];

const averageDisplay = document.querySelector(`#averagePrice`);
const freelancerList = document.querySelector(`#infoContainer`);
const maxPeople = 8;

const render = () => {
  freelancerList.innerHTML = "";
  freelancer.forEach((person) => {
    const li = document.createElement(`li`);
    const info = `Name: ${person.name} --- Price: ${person.price} --- Occupation: ${person.occupation}`
    li.innerText = info;
    freelancerList.appendChild(li);
    
  });
};

const addFreelancer = () => {
  if (freelancer.length === maxPeople) {
    clearInterval(addFreelancerIntervalId); // Clear the interval when max people reached
  } else {
    const randomFreelancer = people[Math.floor(Math.random() * people.length)];
    freelancer.push(randomFreelancer);
  }
  render(); // Render the updated list of freelancers
};

const addFreelancerIntervalId = setInterval(addFreelancer, 5000); // set interval for 5 seconds


const getAverage = () => {
  freelancer.forEach((lancer) => {
    prices.push(lancer.price); //push lancer.price to new prices array
  });

  let sum = 0 
  for (let i = 0; i < prices.length; i++){//loop through new array 
    sum += prices[i];// add all numbers together
  }
  const average = sum/prices.length
  return average // divide the sum of the array by total number of elements in the array and return quotient 
};

getAverage();

const renderGetAverage = () => { // create render average function
  p = document.createElement(`p`) // create new p element 
  p.innerText = average // set inner text to return of getAverage function 
  averageDisplay.appendChild(p); // add p to our section for display 

};

renderGetAverage();

  
  
  