export interface TableDataItem {
    avatar: string;
    firstName:string;
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
    { avatar: 'src/components/layout/infoAndFilters/imginfoAndFilters/Avatar1.jpg', firstName: 'Deanna',  lastName: ' Annis', email: 'deannannis@gmail.com', phone: '999-999-9999', streetAddress: '475 Spruce Drive', city: 'Pittsburgh', state: 'PA', zipCode: '123', edit: 'src/components/layout/infoAndFilters/imginfoAndFilters/edit-2.svg', remove: 'src/components/layout/infoAndFilters/imginfoAndFilters/trash.svg'},
    { avatar: 'src/components/layout/infoAndFilters/imginfoAndFilters/Avatar2.jpg', firstName: 'George', lastName: ' Gamble', email: 'goeorgegamble@gmail.com', phone: '999-999-9999', streetAddress: '2213 Thorn Street', city: 'Glenrock', state: 'WY', zipCode: '321', edit: 'src/components/layout/infoAndFilters/imginfoAndFilters/edit-2.svg', remove: 'src/components/layout/infoAndFilters/imginfoAndFilters/trash.svg'},
    { avatar: 'src/components/layout/infoAndFilters/imginfoAndFilters/Avatar2.jpg', firstName: 'Andrea', lastName: ' Willis', email: 'andreawillis@gmail.com', phone: '999-999-9999', streetAddress: '1952 Chicago Avenue', city: 'Fresno', state: 'PA', zipCode: '935', edit: 'src/components/layout/infoAndFilters/imginfoAndFilters/edit-2.svg', remove: 'src/components/layout/infoAndFilters/imginfoAndFilters/trash.svg'},
    { avatar: 'src/components/layout/infoAndFilters/imginfoAndFilters/Avatar2.jpg',  firstName: 'Andrea', lastName: ' Willis', email: 'andreawillis@gmail.com', phone: '999-999-9999', streetAddress: '1952 Chicago Avenue', city: 'Fresno', state: 'PA', zipCode: '935', edit: 'src/components/layout/infoAndFilters/imginfoAndFilters/edit-2.svg', remove: 'src/components/layout/infoAndFilters/imginfoAndFilters/trash.svg'},
    { avatar: 'src/components/layout/infoAndFilters/imginfoAndFilters/Avatar2.jpg',  firstName: 'Andrea', lastName: ' Willis', email: 'andreawillis@gmail.com', phone: '999-999-9999', streetAddress: '1952 Chicago Avenue', city: 'Fresno', state: 'PA', zipCode: '935', edit: 'src/components/layout/infoAndFilters/imginfoAndFilters/edit-2.svg', remove: 'src/components/layout/infoAndFilters/imginfoAndFilters/trash.svg'} ,
    { avatar: 'src/components/layout/infoAndFilters/imginfoAndFilters/Avatar2.jpg',  firstName: 'Andrea', lastName: ' Willis', email: 'andreawillis@gmail.com', phone: '999-999-9999', streetAddress: '1952 Chicago Avenue', city: 'Fresno', state: 'PA', zipCode: '935',  edit: 'src/components/layout/infoAndFilters/imginfoAndFilters/edit-2.svg', remove: 'src/components/layout/infoAndFilters/imginfoAndFilters/trash.svg'},
    { avatar: 'src/components/layout/infoAndFilters/imginfoAndFilters/Avatar2.jpg',  firstName: 'Andrea', lastName: ' Willis', email: 'andreawillis@gmail.com', phone: '999-999-9999', streetAddress: '1952 Chicago Avenue', city: 'Fresno', state: 'PA', zipCode: '935',  edit: 'src/components/layout/infoAndFilters/imginfoAndFilters/edit-2.svg', remove: 'src/components/layout/infoAndFilters/imginfoAndFilters/trash.svg'},
  ];
  