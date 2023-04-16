import { Company } from './Company';
import { User } from './User';
import { MapApp } from '../MapApp';

let user = new User();

const map = new MapApp('google-map');

map.addUserMaker(user);
