// Code your solution here
//  Case-insensitive exact match
function findMatching(drivers, name) {
  return drivers.filter(
    (driver) => driver.toLowerCase() === name.toLowerCase()
  );
}

//  Match drivers whose names *start with* the provided letters
function fuzzyMatch(drivers, letters) {
  return drivers.filter((driver) =>
    driver.toLowerCase().startsWith(letters.toLowerCase())
  );
}

//  Match objects by `name` property
function matchName(drivers, name) {
  return drivers.filter((driver) => driver.name === name);
}

// Export for testing
module.exports = { findMatching, fuzzyMatch, matchName };
