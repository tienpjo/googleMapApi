import { faker } from '@faker-js/faker';
export class Company {
  companyName?: string;
  catchPhrase?: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude()),
    };
  }
  displayContent(): string {
    return `
    <div>
      <h3>Company Name: ${this.companyName}</h3>
      <h4>catchPhrase: ${this.catchPhrase}</h4>
    </div>
    `;
  }
}
