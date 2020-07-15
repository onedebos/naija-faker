const path = require("path");
const {
  firstNames,
  lastNames,
  states,
  emailProviders,
  banks,
} = require(path.join(__dirname, "names.js"));

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
    if (letterToStartWith.length <= 1) {
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
    if (letterToStartWith.length <= 1) {
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
  max = emailProviders.length;
  const position = Math.floor(Math.random() * (max - min) + min);
  return `${fName}.${lName}@${emailProviders[position]}`;
};

const getState = () => {
  const min = 0;
  max = states.length;
  const position = Math.floor(Math.random() * (max - min) + min);
  return states[position].toLowerCase();
};

const getBank = () => {
  const min = 0;
  max = banks.length;
  const position = Math.floor(Math.random() * (max - min) + min);
  return banks[position].toLowerCase();
};

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
};
