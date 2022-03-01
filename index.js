// Code your solution in this file!

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

const returnFirstTwoDrivers = function() {
  return drivers.slice(0,2); 
  }

const returnLastTwoDrivers = function() {
  return drivers.slice(-2); 
  }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(a) {
  return function fareMultiplier(b) {
    return a * b
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

let selectDifferentDrivers = function(drivers, returnFirstTwoDrivers) {
  return returnFirstTwoDrivers(drivers)
}