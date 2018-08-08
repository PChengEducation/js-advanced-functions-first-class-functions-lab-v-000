// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  newDrivers = drivers.slice(0,2);
  return newDrivers;
}

const returnLastTwoDrivers = function(drivers){
  newDrivers = drivers.slice(-2);
  return newDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num){
  return function(fare){return fare * num};
}

const fareDoubler = createFareMultiplier(2)