function generateID() {
  let counter = 1;
  return () => {
    parseInt(
      "001"
        .concat(counter++)
    );
  }
}

class User {
  id = generateID();
  name;
  surname;
  login;
  email;
  phone;
  avatar = null;
  about = null;

  constructor(name, surname, email, phone,) {
    this.id();
    this.name = name;
    this.surname = surname;
    this.login = this.getLogin();
    this.email = email;
    this.phone = phone;
  }

  getLogin() {
    return this.name.toLowerCase()
      .concat("__")
      .concat(this.surname.toLowerCase());
  }
}