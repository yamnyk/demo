class User {
  id;
  name;
  surname;
  login;
  email;
  phone;
  avatar;
  about;

  constructor(name, surname, email, phone,) {
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