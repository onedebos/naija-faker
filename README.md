![issues](https://img.shields.io/github/issues/onedebos/naija-faker) ![forks](https://img.shields.io/github/forks/onedebos/naija-faker) ![stars](https://img.shields.io/github/stars/onedebos/naija-faker)

# naija-faker

This package helps you generate fake Nigerian data on the fly for use in your projects.

# Getting Started

**To get started, follow the instructions below**

- install the package `npm install naija-faker`
- import it in your app using either of:

```
 import naijaFaker from 'naija-faker // if using ES6

 const naijaFaker = require('naija-faker)
```

- use it!
  `naijaFaker.getFirstName()`

# Available methods

### Generate an array of people with first name, last name, age, bank and state

- To generate an array of people, simply pass an `amt` value to `getPerson()` i.e `getPersonList({amt: 2})`
- NB: Default `amt` is 5

```

 getPersonList({amt: 2})
  =>
  [
    {fName: 'abdul', lName: 'qadr', age: 40, email: 'abdul.qadr@hey.com', state:'ekiti' },
    {fName: 'frank', lName: 'edoho', age: 23, email: 'frank.edoho@gmail.com', state:'delta' }
  ]`

```

### Generate a random First name or Last name

- `getFirstName() //=> 'abraham'`
- `getLastName() //=> 'fatai`

### Generate a random First name or Last name that starts with a specific letter

- **NB: Currently only accepts one letter**

- `getFirstName('r') //=> 'rahman'`
- `getLastName('b') //=> 'bolanle'`

### Generate a person Object with random values for First name, Last name and Age

- **NB: Default age is between 18 - 50**

```
 getPerson()
  //=> {fName: 'abdul', lName: 'qadr', age: 20, email: 'abdul.qadr@hey.com', state:'ekiti' }
```

````

-- To change the default `min` and `max` values for age, pass in min and max values as an object like below.

- e.g: ```
  getPerson({min:20, max:50})
  => {
    fName: 'abdul', lName: 'qadr', age: 40,
    email: 'abdul.qadr@hey.com', state:'ekiti', bank:'Access bank'
    }

````

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

## Authors

👤 **Adebola Adeniran**

- Github: [@githubhandle](https://github.com/onedebos)
- Twitter: [@twitterhandle](https://twitter.com/debosthefirst)
- Linkedin: [linkedin](https://www.linkedin.com/in/adebola-niran/)
- Web: [Adebola](https://adebola.dev)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

## 📝 License

This project is [MIT](lic.url) licensed.

```

```
