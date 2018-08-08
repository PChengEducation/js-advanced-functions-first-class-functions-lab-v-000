// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  newDrivers = drivers.slice(0,2);
  return newDrivers;
}

const returnLastTwoDrivers = function(drivers){
  newDrivers = drivers.slice(-1, -2);
  return newDrivers;
}