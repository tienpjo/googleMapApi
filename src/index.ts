import { Company } from './Company';
import { User } from './User';
import { MapApp } from '../MapApp';

const map = new MapApp('google-map');
let user = new User();
console.log(user);
let company = new Company();
console.log(company);
map.addMaker(user);
map.addMaker(company);
