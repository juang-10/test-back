export class UsersDom {
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

  updateInfo(itemInfo: any) {
    if (itemInfo.name) this.name = itemInfo.name;
    if (itemInfo.lastname) this.lastname = itemInfo.lastname;
    if (itemInfo.password) this.password = itemInfo.password;
    if (itemInfo.email) this.email = itemInfo.email;
    if (itemInfo.role) this.role = itemInfo.role;
    if (itemInfo.created_on) this.created_on = itemInfo.created_on;
    if (itemInfo.last_login) this.last_login = itemInfo.last_login;

    return Object.freeze(this);
  }
}

export function buildMakeUsers() {
  return function execute(item: any) {
    const sale = new UsersDom(
      item.id,
      item.name,
      item.lastname,
      item.password,
      item.email,
      item.role,
      item.created_on,
      item.last_login
    );
    return Object.freeze(sale);
  };
}
