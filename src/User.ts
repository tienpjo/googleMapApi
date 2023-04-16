import { faker } from '@faker-js/faker';
export class User {
  name: string;
  location: {
    lat: number;
    long: number;
  };
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: Number(faker.address.latitude()),
      long: Number(faker.address.longitude()),
    };
  }
}
