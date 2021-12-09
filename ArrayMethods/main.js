console.log("Init commit");
//Callback function - Exercise 1
const Earth = function () {
  //anonymus function will be deleted after run
  console.log("I am in planet Earth");
};

const Saturn = function () {
  console.log("I am in an unknown planet");
};

function planetLogFunction(functionToRun) {
  functionToRun();
}

//Arrow Functions
function sum(a, b) {
  return a + b;
}
//this line does the same as above
const add = (x, y) => x + y;

//Array Method
//ForEach
const years = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

function birthYear(year) {
  return 2021 - year;
}

years.forEach((year) => birthYear(year));

function canDrive(year) {
  if (birthYear() > 17) return `Born in ${year} can drive`;
  else return `Born in ${year} can drive in ${17 - birthYear()} years`;
}

years.forEach((year) => canDrive(year));

//this function stores the output into a new array
const canDriveInUK = years.map((year) => {
  const canPersonDrive = 2021 - year > 17;
  const age = 2021 - year;
  if (canPersonDrive) return `Born in ${year} can drive`;
  else return `Born in ${year} can drive in ${age} years`;
});

//Map
const mentorNames = ["Daniel", "Irina", "Gordon", "Jim"];
const lastCharacterArray = mentorNames.map((mentor) =>
  mentor.charAt(mentor.length - 1)
);

//Filter
const text = "These are the birth years of people who can drive: ";
const canDriveArray = years.filter((year) => {
  if (birthYear(year) > 17) return true;
});

function DriveFunction() {
  console.log(text);
  return canDriveArray;
}

//Listings - use these fuctions to generate random listings
/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Get an array with listing objects with random color and speed
 * @param {integer} numberOfListings - The number of listings
 * @returns {array} Array containing the listing objects
 */
function generateListings(numberOfListings) {
  const listings = [];

  const listingType = ["House", "Apartment", "Shed", "Dorm", "Farm"];
  const listingFacilities = [
    "Parkering",
    "Elevator",
    "Altan",
    "Have",
    "Husdyr",
  ];

  for (let i = 0; i < numberOfListings; i++) {
    const listing = {};
    const randomTypeIndex = randomIntFromInterval(0, listingType.length - 1);
    const numberOfFacilities = randomIntFromInterval(
      1,
      listingFacilities.length - 1
    );
    const facilities = [];
    for (let i = 0; i < numberOfFacilities; i++) {
      const randomIndexFacilities = randomIntFromInterval(
        0,
        listingFacilities.length - 1
      );
      const randomFacility = listingFacilities[randomIndexFacilities];

      if (!facilities.includes(randomFacility)) {
        facilities.push(randomFacility);
      }
    }

    listing.type = listingType[randomTypeIndex];
    listing.facilities = facilities;
    listing.price = randomIntFromInterval(1, 10000);
    listing.hasGarden = Boolean(randomIntFromInterval(0, 1));
    listing.size = randomIntFromInterval(12, 1000);
    listing.img = `https://loremflickr.com/200/200/${listing.type}`;

    listings.push(listing);
  }

  return listings;
}

generateListings(37).forEach(
  (listings) => `The listing size is ${listings.size}`
);

const pricesList = generateListings(37).map(
  (listing) => `The price for this place is: ${listing.price}`
);

const cheapList = generateListings(37).filter(
  (listing) => listing.price < 2000
);

const expensiveList = generateListings(37)
  .filter((listing) => listing.price > 2000)
  .map((listing) => listing.price);

const hasParking = generateListings(37).filter((listing) =>
  listing.facilities.includes("Parkering")
);

const listings = generateListings(10);

const userFilter = {
  type: "farm",
};

function filterListings(listings, userFilter) {
  console.log(userFilter);
  const testArray = listings.filter((listing) => {
    listing.type === userFilter.type;
  });
  return testArray;
}

const testArray = listings.filter(function (listing) {
  if (listing.type === userFilter.type) return true;
});
