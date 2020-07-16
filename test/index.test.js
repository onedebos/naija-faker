const naijaFaker = require("../index");
const data = require("../names");
const { getPerson } = require("../index");

describe("getFirstName", () => {
  it("returns a random first name if there's no parameter passed in", () => {
    const name = naijaFaker.getFirstName();
    expect(name).not.toBeNull();
    expect(name).toBeDefined();
    expect(name.length).toBeGreaterThan(1);
    expect(data.firstNames.includes(name)).toBeTruthy;
  });

  it("returns a first name that starts with a given letter when that letter is passed as an argument", () => {
    const name = naijaFaker.getFirstName("ra");
    expect(name).toMatch(/^ra/);
  });
});

describe("getLastName()", () => {
  it("returns a random Last name if there's no parameter passed in", () => {
    const name = naijaFaker.getLastName();
    expect(name).not.toBeNull();
    expect(name).toBeDefined();
    expect(name.length).toBeGreaterThan(1);
    expect(data.lastNames.includes(name)).toBeTruthy;
  });

  it("returns a Last name that starts with a given letter when that letter is passed as an argument", () => {
    const name = naijaFaker.getLastName("ade");
    expect(name).toMatch(/^ade/);
  });
});

describe("getState()", () => {
  it("returns a random state from the list of states", () => {
    const state = naijaFaker.getState();
    expect(state).not.toBeNull();
    expect(state).toBeDefined();
    expect(state.length).toBeGreaterThan(1);
    expect(data.lastNames.includes(state)).toBeTruthy;
  });
});

describe("getEmail", () => {
  it("should return an email in the format fname.lname@[emailProvider].com", () => {
    const fname = naijaFaker.getFirstName(),
      lname = naijaFaker.getLastName(),
      email = naijaFaker.getEmail(fname, lname);
    expect(email).not.toBeNull();
    expect(email).toMatch(/\w\.\w/);
  });
});

describe("getPerson()", () => {
  it("returns a person between the ages of 18 and 50 if no parameters are passed", () => {
    const person = getPerson();
    expect(person).not.toBeNull();
    expect(person.age).toBeGreaterThanOrEqual(18);
    expect(person.age).toBeLessThanOrEqual(50);
    expect(person).toHaveProperty("fName", person.fName);
    expect(person).toHaveProperty("lName", person.lName);
    expect(person).toHaveProperty("age", person.age);
    expect(person).toHaveProperty("email", person.email);
    expect(person).toHaveProperty("bank", person.bank);
  });

  it("returns a person between the ages of min and max passed in", () => {
    const person = getPerson({ min: 30, max: 35 });
    expect(person).not.toBeNull();
    expect(person.age).toBeGreaterThanOrEqual(30);
    expect(person.age).toBeLessThanOrEqual(35);
  });
});

describe("getPersonList()", () => {
  it("returns an array of person objects of length 5 if no params are passed in", () => {
    const personList = naijaFaker.getPersonList();
    expect(personList.length).toBe(5);
  });

  it("returns an array of person objects of specified length if a params of amt is passed in", () => {
    const personList = naijaFaker.getPersonList({ amt: 10 });
    expect(personList.length).toBe(10);
  });
});

describe("getNameList", () => {
  it("returns an array of 5 names if no parameter is given", () => {
    const nameList = naijaFaker.getNameList();
    expect(nameList.length).toBe(5);
  });

  it("returns an array of the length specified when an amt parameter is given", () => {
    const nameList = naijaFaker.getNameList({ amt: 20 });
    expect(nameList.length).toBe(20);
  });
});
