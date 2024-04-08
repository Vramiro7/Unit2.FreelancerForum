const freelancer = [];


const prices = [];


const people = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Andy Button", price: 72, occupation: "project manager" },
  { name: "Tiburcio James", price: 97, occupation: "audio engineer" },
  { name: "Zoe Escorza", price: 54, occupation: "musician" },
  { name: "Alex Smith", price: 44, occupation: "driver" },
  { name: "Devin Hinch", price: 68, occupation: "mechanic" },
];

const averageDisplay = document.querySelector(`#averagePrice`);
const freelancerList = document.querySelector(`#infoContainer`);
const maxPeople = 8;

const renderFreelancers = () => {
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
  renderFreelancers(); // Render the updated list of freelancers
};


const addFreelancerIntervalId = setInterval(addFreelancer, 5000); // set interval for 5 seconds

const updatePrices = () => {
  freelancer.map((person) => {
    prices.push(person.price);
  })
  console.log(prices)
}

const getAverage = () => {
  let sum = 0;
  for (let i = 0; i < freelancer.length; i++){
    sum += freelancer[i].price;
  }
  const avg = sum / freelancer.length;
  return avg 
}

getAverage();



// ORIGINAL CODE, WAS ATTEMPTING TO REWRITE IN ORDER TO SEE WHERE I WENT WRONG

// const getAverage = () => {
//   freelancer.map((lancer) => {
//     prices.push(lancer.price); //push lancer.price to new prices array
//   });
  
//   let sum = 0 
//   for (let i = 0; i < prices.length; i++){//loop through new array 
//     sum += prices[i];// add all numbers together
//   }
//   const priceAverage = sum/prices.length
//   return priceAverage// divide the sum of the array by total number of elements in the array and return quotient 
// };

// getAverage();


// const renderGetAverage = () => { // create render average function
  
// };

// renderGetAverage();

  
  
  