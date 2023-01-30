export class UsersApi {
  id: number;
  name: string;
  lastname: string;
  password: string;
  email: string;
  role: string;
  created_on: string;
  last_login: string;

  constructor(
    id: number,
    name: string,
    lastname: string,
    password: string,
    email: string,
    role: string,
    created_on: string,
    last_login: string
  ) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.password = password;
    this.email = email;
    this.role = role;
    this.created_on = created_on;
    this.last_login = last_login;
  }
}
