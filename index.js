const {
  firstNames,
  states,
  lastNames,
  emailProviders,
  banks,
  address,
  networkProvider,
} = require("./names");

const WRONG_KEY_MESSAGE = "Did you forget to specify the key:";

const getName = (letterToStartWith, nameArray) => {
  // nameArray can be either firstNames array or lastNames array
  let max = nameArray.length - 1;
  let min = 0;
  let position;
  if (!letterToStartWith) {
    position = Math.floor(Math.random() * (max - min) + min);
    return nameArray[position];
  } else {
    const arrayOfNamesThatStartsWithLetter = [];
    nameArray.map((name) => {
      if (name.startsWith(letterToStartWith)) {
        arrayOfNamesThatStartsWithLetter.push(name);
      }
    });

    max = arrayOfNamesThatStartsWithLetter.length;
    min = 0;
    position = Math.floor(Math.random() * (max - min) + min);
    return arrayOfNamesThatStartsWithLetter[position];
  }
}

const getFirstName = (letterToStartWith) => {
  return getName(letterToStartWith, firstNames);
};

const getLastName = (letterToStartWith) => {
  return getName(letterToStartWith, lastNames);
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
  return `${houseNumber}, ${streetAddress}, ${city}`;
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

// Randomly generates phone number based on the network provider
const getPhoneNumber = () => {
  const countryCode = "+234";

  // Generating network provider prefix
  const networkPrefixArray = Object.keys(networkProvider);
  const randomIndex = Math.floor(networkPrefixArray.length*Math.random());
  const networkPrefix = networkPrefixArray[randomIndex];
  
  // Generating the last part
  const threeDigitPart = (Math.floor(Math.random() * 1000) + 1000).toString().substring(1);
  const fourDigitPart = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);

  // Full number
  return `${countryCode}-${networkPrefix}-${threeDigitPart}-${fourDigitPart}`
};

// returns netowrk provider basd on the 2nd part of phonenumber
const getNetworkProvider = (phoneNumber) => {
  const getNetworkPrefix = phoneNumber.split("-")[1];
  return networkProvider[getNetworkPrefix];
}

const getPerson = (options) => {
  let fName, lName, age;
  if (!options) {
    const min = 18;
    const max = 50;
    fName = getFirstName();
    lName = getLastName();
    age = Math.floor(Math.random() * (max - min) + min);
    phoneNumber = getPhoneNumber();
    return {
      fName,
      lName,
      age,
      email: getEmail(fName, lName),
      state: getState(),
      bank: getBank(),
      address: getAddress(),
      phoneNumber,
      networkProvider: getNetworkProvider(phoneNumber),
    };
  } else {
    let { min, max } = options;
    if (!min && !max) {
      return WRONG_KEY_MESSAGE + "'min' and 'max'";
    }
    fName = getFirstName();
    lName = getLastName();
    age = Math.floor(Math.random() * (max - min) + min);
    phoneNumber = getPhoneNumber();
    return {
      fName,
      lName,
      age,
      email: getEmail(fName, lName),
      state: getState(),
      bank: getBank(),
      address: getAddress(),
      phoneNumber,
      networkProvider: getNetworkProvider(phoneNumber),
    };
  }
};

const getPersonList = (options) => {
  let listCount = 5;
  if (options) {
    const { amt } = options;
    if (!amt) return WRONG_KEY_MESSAGE + "'amt'";
    listCount = amt;
  }
  const personArr = [];
  new Array(listCount).fill(0).map(() => {
    personArr.push(getPerson());
  });

  return personArr;
};

const getNameList = (options) => {
  let listCount = 5;
  if (options) {
    const { amt } = options;
    if (!amt) return WRONG_KEY_MESSAGE + "'amt'";
    listCount = amt;
  }
  const firstNamesArr = [];
  new Array(listCount).fill(0).map(() => {
    firstNamesArr.push(getFirstName());
  });

  return firstNamesArr;
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
  getPhoneNumber,
  getNetworkProvider,
};
