// const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']


// function returnFirstTwoDrivers() {
//     return drivers.slice(0,2)
// }


// function returnLastTwoDrivers() {
//     return drivers.slice(2)
// }

// const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]




// function createFareMultiplier(i = 0) {
//     return 
// }



const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function (fareMultiplier) {  
  return function(value) {
    return fareMultiplier * value;
  }
}

const fareDoubler = createFareMultiplier(2);
//fareDOuble(fare)

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers,returnLastTwoDrivers){
    return returnLastTwoDrivers(arrayOfDrivers)
}
