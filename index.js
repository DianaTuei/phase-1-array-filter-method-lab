// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
const drivers2 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

// function to find matching drivers
function findMatching(driverName, nameCase){
    // change case of drivers to lowercase
    const checkCase = nameCase.toLowerCase();

    // using filter method to find matching drivers
    const matchingDrivers = driverName.filter(driverName => driverName.toLowerCase() === checkCase );

    return matchingDrivers;

}

function fuzzyMatch(array, name){
    // confirm index of name to be 0 in name
   const matchingLetters = array.filter(array => array[0] === name[0] );
   return matchingLetters;

}

function matchName(arrayD, nameD){
    const matchingNames = arrayD.filter(arrayD => arrayD.name === nameD);
    return matchingNames;
}

// testing matching names in an array
const matchyN = matchName(drivers2,'Bobby');
console.log ('Matching name is', matchyN);

// testing matching first letter
const matchyL = fuzzyMatch(drivers, 'A');
console.log('The matching letter is:', matchyL);

// tests 1 to return drivers that match the passed in name
const test1 = findMatching(drivers, 'Bobby');
console.log('Test 1:', test1);

// test 2 to return drivers whose case don't match but letters
const test2 = findMatching(drivers, 'bobby');
console.log ('Test 2:', test2);

// test 3 if there is no match return an empty array
const test3 = findMatching(drivers, 'Netai');
console.log ('Test 3:', test3);

