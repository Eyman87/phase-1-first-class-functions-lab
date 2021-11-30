// Code your solution in this file!
// const returnFirstTwoDivers = ['Sally', 'Bob', 'Freddy', 'Claudia']
function returnFirstTwoDrivers (drivers) {
    return drivers.slice(0,2);
}

function returnLastTwoDrivers (drivers) {
    return drivers.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


const createFareMultiplier = function (num) {
    return function (fare) {
        return fare * num
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, x){
  return x(drivers)
}



