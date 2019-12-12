let _COUNTER = 1;
let _PREFIX = 111;

function generateID() {
  return parseInt(
    _PREFIX.toString()
      .concat(_COUNTER++)
  );
}

class User {
  id;
  name;
  surname;
  login;
  email;
  phone;
  avatar = null;
  about = null;

  constructor(name, surname, email, phone,) {
    this.id = generateID();
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