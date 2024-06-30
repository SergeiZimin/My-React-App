import _ from 'lodash';
import avatar1Image from './imginfoAndFilters/Avatar1.jpg';
import avatar2Image from './imginfoAndFilters/Avatar2.jpg';
import edit2Image from './imginfoAndFilters/edit2.svg';
import trashImage from './imginfoAndFilters/trash.svg';

export interface TableDataItem {
  id: string;
  avatar: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  edit: string;
  remove: string;
}

export const initialTableData: TableDataItem[] = [
  { id: _.uniqueId(), avatar: avatar1Image, firstName: 'Deanna', lastName: ' Annis',  email: 'deannannis@gmail.com',    phone: '999-999-9999', streetAddress: '475 Spruce Drive',    city: 'Pittsburgh', state: 'PA', zipCode: '123', edit: edit2Image, remove: trashImage},
  { id: _.uniqueId(), avatar: avatar2Image, firstName: 'George', lastName: ' Gamble', email: 'goeorgegamble@gmail.com', phone: '999-999-9999', streetAddress: '2213 Thorn Street',   city: 'Glenrock',   state: 'WY', zipCode: '321', edit: edit2Image, remove: trashImage},
  { id: _.uniqueId(), avatar: avatar2Image, firstName: 'Andrea', lastName: ' Willis', email: 'andreawillis@gmail.com',  phone: '999-999-9999', streetAddress: '1952 Chicago Avenue', city: 'Fresno',     state: 'PA', zipCode: '935', edit: edit2Image, remove: trashImage},
  { id: _.uniqueId(), avatar: avatar2Image, firstName: 'Andrea', lastName: ' Willis', email: 'andreawillis@gmail.com',  phone: '999-999-9999', streetAddress: '1952 Chicago Avenue', city: 'Fresno',     state: 'PA', zipCode: '935', edit: edit2Image, remove: trashImage},
  { id: _.uniqueId(), avatar: avatar2Image, firstName: 'Andrea', lastName: ' Willis', email: 'andreawillis@gmail.com',  phone: '999-999-9999', streetAddress: '1952 Chicago Avenue', city: 'Fresno',     state: 'PA', zipCode: '935', edit: edit2Image, remove: trashImage} ,
  { id: _.uniqueId(), avatar: avatar2Image, firstName: 'Andrea', lastName: ' Willis', email: 'andreawillis@gmail.com',  phone: '999-999-9999', streetAddress: '1952 Chicago Avenue', city: 'Fresno',     state: 'PA', zipCode: '935', edit: edit2Image, remove: trashImage},
  { id: _.uniqueId(), avatar: avatar2Image, firstName: 'Andrea', lastName: ' Willis', email: 'andreawillis@gmail.com',  phone: '999-999-9999', streetAddress: '1952 Chicago Avenue', city: 'Fresno',     state: 'PA', zipCode: '935', edit: edit2Image, remove: trashImage},
];
