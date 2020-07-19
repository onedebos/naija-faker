![issues](https://img.shields.io/github/issues/onedebos/naija-faker) ![forks](https://img.shields.io/github/forks/onedebos/naija-faker) ![stars](https://img.shields.io/github/stars/onedebos/naija-faker?&color=brightgreen) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/onedebos/naija-faker) ![ci](https://travis-ci.com/onedebos/naija-faker.svg?branch=master) 
![test](/badges/badge-functions.svg) ![test](/badges/badge-statements.svg) ![test](/badges/badge-branches.svg) ![test](/badges/badge-lines.svg)

# naija-faker

This package helps you generate fake Nigerian data on the fly for use in your projects.

# Getting Started

**To get started, follow the instructions below**

- install the package `npm install naija-faker`
- import it in your app using:

```
    // if using ES6
import naijaFaker from 'naija-faker'

    or

import {getFirstName, getLastName, getPerson, getPersonList, getNameList, getBank, getState} from 'naija-faker'

    // without ES6
const naijaFaker = require('naija-faker')
```

- use it!

```
  naijaFaker.getFirstName()
```

# Available methods

### Generate an array of people with first name, last name, age, bank, state and phone number

- To generate an array of people, simply pass an `amt` value to `getPersonList()` i.e `getPersonList({amt: 2})`
- **NB: Default `amt` is 5**

```

 getPersonList({amt: 2})
  =>
  [
    {fName: 'abdul', lName: 'qadr', age: 40, email: 'abdul.qadr@hey.com', state:'ekiti',
     phoneNumber:'+234-805-940-4016', address: '102b, opebi road, opebi, abakaliki' },
    {fName: 'frank', lName: 'edoho', age: 23, email: 'frank.edoho@gmail.com', state:'delta', 
    phoneNumber:'+234-705-261-5977', address: '223, ambeez plaza, zone 5, onne' }
  ]

```

### Generate a random First name or Last name

- `getFirstName() //=> 'abraham'`
- `getLastName() //=> 'fatai'`

### Generate a random First name or Last name that starts with a letter/letters

- `getFirstName('r') //=> 'rahman'`
- `getLastName('bo') //=> 'bolanle'`

### Generate a person Object with random values for First name, Last name and Age

- **NB: Default age is between 18 - 50**

```
 getPerson()
  //=> {fName: 'abdul', lName: 'qadr', age: 20, email: 'abdul.qadr@hey.com', state:'ekiti', 
  phoneNumber:'+234-805-940-4016', address: 'plaza 1121, odunuga street, igboho' }

```

- To change the default `min` and `max` values for age, pass in min and max values as an object like below.

```
  getPerson({min:20, max:50})
  => {
    fName: 'abdul', lName: 'qadr', age: 40,
    email: 'abdul.qadr@hey.com', state:'ekiti', bank:'Access bank', phoneNumber:'+234-805-940-4016', address: '9329, stanton oval, kwara, kosofe'
    }

```

### Generate an array of only names

- Simply pass `amt` to `getNameList()` e.g

  **NB: Default `amt` is 5**

```
getNameList({amt: 5})

```

### Generate a random Nigerian state

- Simply call `getState() //=> 'Ondo'`

### Generate a bank name

- Simply call `getBank() //=> 'Access Bank'`

### Generate an address

- Simply call `getAddress() //=> 'Plot 83, Nasarawa, Bauchi'`

### Generate a phone number

- Simply call `getPhoneNumber() //=> '+234-805-940-4016'`

### Test

- To run the tests

```
npm install
npm test
```

## Authors

👤 **Adebola Adeniran**

- Github: [@githubhandle](https://github.com/onedebos)
- Twitter: [@twitterhandle](https://twitter.com/debosthefirst)
- Linkedin: [linkedin](https://www.linkedin.com/in/adebola-niran/)
- Web: [Adebola](https://adebola.dev)

👤 **Mayank Bucha**

- Github: [@githubhandle] (https://github.com/mayankbucha)
- Linkedin: [linkedin] (https://www.linkedin.com/in/mayank-bucha-a50958174/)
- Email: [gmail] (mayankbucha01@gmail.com)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

**Nikhil Chaurasia**

- Github: [Github](https://github.com/nikhil-chaurasia14)
- Linkedin: [linkedin](https://www.linkedin.com/in/nikhil-chaurasia-613755192)
- Email: [Gmail](nikhil.chaurasia140298@gmail.com)

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

## 📝 License

This project is [MIT](lic.url) licensed.
