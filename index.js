//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function findMatching(data, myName) {
    //console.log(data.filter( (element) => element.toUpperCase() == myName.toUpperCase()));
    return data.filter( (element) => element.toUpperCase() == myName.toUpperCase());
}
// const findMatchingArrow = (data, myName) => data.filter((element) => element.toUpperCase() == myName.toUpperCase());

function fuzzyMatch(data, firstLetters) {
    //console.log(data.filter((element) => element.slice(0,2) == firstLetters));
    return data.filter((element) => element.slice(0,2) == firstLetters)
}

function matchName(data, myName) {
    //console.log(data.filter((element) => element[myName] == myName));
    return console.log(data.filter((element) => element[myName].toUpperCase() == myName.toUpperCase()));
}
//fuzzyMatch(drivers, "Sa")