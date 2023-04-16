import { Company } from './Company';
import { User } from './User';
import { MapApp } from '../MapApp';

let user = new User();
console.log(user);
let company = new Company();
const map = new MapApp('google-map');

map.addMaker(user);
map.addMaker(company);
