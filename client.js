$(document).ready(readyNow);

function readyNow() {
  $(`#runCalculateAll`).on( 'click', calculateAll );
  $(`#runCalculateAll`).on( 'click', displayBonus );
}

const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

function calculateBonus( emplObject) {
  let bonusPercentage = 0;
  let bonusPercentageMax = .13;
  let bonusPercentageMin = 0;
  if ( emplObject.reviewRating <= 2 ) {
    bonusPercentage = 0;
  }
  else if ( emplObject.reviewRating === 3 ) {
    bonusPercentage = .04;
  }
  else if ( emplObject.reviewRating === 4 ) {
    bonusPercentage = .06;
  }
  else if ( emplObject.reviewRating === 5 ) {
    bonusPercentage = .1;
  }
// return bonusPercentage; PASS THIS INTO OBJECT AT END

if ( Number(emplObject.employeeNumber) > 999 && Number(emplObject.employeeNumber) < 9999 ) {
  bonusPercentage += .05;
}

if ( emplObject.annualSalary > 65000 ) {
  bonusPercentage -= 1;
}

if ( bonusPercentage > bonusPercentageMax ) {
  bonusPercentage = bonusPercentageMax;
}
else if ( bonusPercentage < bonusPercentageMin ) {
  bonusPercentage = bonusPercentageMin;
}
let totalBonus = Number(emplObject.annualSalary) * bonusPercentage; 
let totalCompensation = totalBonus + Number(emplObject.annualSalary); 
let something = {
  name: emplObject.name,
  bonusPercentage,
  totalCompensation,
  totalBonus,
}
console.log(something); 
return something;
}

let bonusData = []; 

function calculateAll () {
  for (let employee of employees){

    bonusData.push(calculateBonus (employee));
    
  //  console.log(something); 
  }
  return bonusData;
}

console.log('testing calculateAll', calculateAll());

function displayBonus() {
  let el = $('#bonusDataOutput');
  for ( let i = 0; i <= bonusData.length ; i ++) {

    el.append(`<li>` + bonusData[i] + `</li>`);
  }
  //return 'in displayBonus outside loop';
}

console.log('testing displayBonus', displayBonus());
