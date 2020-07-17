const {
  firstNames,
  states,
  lastNames,
  emailProviders,
  banks,
  address,
} = require("./names");

const getFirstName = (letterToStartWith) => {
  let max = firstNames.length - 1;
  let min = 0;
  let position;
  // random fName
  if (!letterToStartWith) {
    position = Math.floor(Math.random() * (max - min) + min);
    return firstNames[position];
  } else {
    // random fName that starts with letterToStartWith
    if (letterToStartWith) {
      const arrayOfNamesThatStartsWithLetter = [];
      firstNames.map((firstName) => {
        if (firstName.startsWith(letterToStartWith)) {
          arrayOfNamesThatStartsWithLetter.push(firstName);
        }
      });

      max = arrayOfNamesThatStartsWithLetter.length;
      min = 0;
      position = Math.floor(Math.random() * (max - min) + min);
      return arrayOfNamesThatStartsWithLetter[position];
    }
  }
};

const getLastName = (letterToStartWith) => {
  let max = lastNames.length - 1;
  let min = 0;
  let position;
  // random fName
  if (!letterToStartWith) {
    position = Math.floor(Math.random() * (max - min) + min);
    return lastNames[position];
  } else {
    // random fName that starts with letterToStartWith
    if (letterToStartWith) {
      const arrayOfNamesThatStartsWithLetter = [];
      lastNames.map((lastName) => {
        if (lastName.startsWith(letterToStartWith)) {
          arrayOfNamesThatStartsWithLetter.push(lastName);
        }
      });

      max = arrayOfNamesThatStartsWithLetter.length;
      min = 0;
      position = Math.floor(Math.random() * (max - min) + min);
      return arrayOfNamesThatStartsWithLetter[position];
    }
  }
};

const getEmail = (fName, lName) => {
  const min = 0;
  const max = emailProviders.length;
  const position = Math.floor(Math.random() * (max - min) + min);
  return `${fName}.${lName}@${emailProviders[position]}`;
};

const getState = () => {
  const min = 0;
  const max = states.length;
  const position = Math.floor(Math.random() * (max - min) + min);
  return states[position].toLowerCase();
};

const getBank = () => {
  const min = 0;
  const max = banks.length;
  const position = Math.floor(Math.random() * (max - min) + min);
  return banks[position].toLowerCase();
};

// returns address
const getAddress = () => {
  const houseNumber = getHouseNumber();
  const streetAddress = getStreetAddress();
  const city = getCity();
  // returns address with house number, street and city
  return `${houseNumber}, ${streetAddress}, ${city}`
};

// returns House number
const getHouseNumber = () => {
  const min = 0;
  const max = address.houseNumber.length;
  const position = Math.floor(Math.random() * (max - min) + min);
  return address.houseNumber[position].toLowerCase();
};

// return street address
const getStreetAddress = () => {
  const min = 0;
  const max = address.streetAddress.length;
  const position = Math.floor(Math.random() * (max - min) + min);
  return address.streetAddress[position].toLowerCase();
};

// returns city
const getCity = () => {
  const min = 0;
  const max = address.city.length;
  const position = Math.floor(Math.random() * (max - min) + min);
  return address.city[position].toLowerCase();
};

// TODO refactor
const getPerson = (options) => {
  let fName, lName, age;
  if (!options) {
    const min = 18;
    const max = 50;
    fName = getFirstName();
    lName = getLastName();
    age = Math.floor(Math.random() * (max - min) + min);
    return {
      fName,
      lName,
      age,
      email: getEmail(fName, lName),
      state: getState(),
      bank: getBank(),
      address: getAddress(),
    };
  } else {
    let { min, max } = options;
    fName = getFirstName();
    lName = getLastName();
    age = Math.floor(Math.random() * (max - min) + min);
    return {
      fName,
      lName,
      age,
      email: getEmail(fName, lName),
      state: getState(),
      bank: getBank(),
      address: getAddress(),
    };
  }
};

const getPersonList = (options) => {
  let listCount;
  if (!options) {
    listCount = 5;
  } else {
    const { amt } = options;
    listCount = amt;
  }

  const persons = new Array(listCount).fill(0);
  const personArr = [];
  if (listCount) {
    persons.map(() => {
      personArr.push(getPerson());
    });

    return personArr;
  }
};

const getNameList = (options) => {
  let listCount;
  if (!options) {
    listCount = 5;
  } else {
    const { amt } = options;
    listCount = amt;
  }

  const nameCnt = new Array(listCount).fill(0);
  const firstNamesArr = [];
  if (listCount) {
    nameCnt.map(() => {
      firstNamesArr.push(getPerson());
    });

    return firstNamesArr;
  }
};

module.exports = {
  getFirstName,
  getLastName,
  getPerson,
  getPersonList,
  getNameList,
  getBank,
  getAddress,
  getState,
  getEmail,
};
