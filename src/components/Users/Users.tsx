import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import '../../components/layout/infoAndFilters/InfoAndFilters.css';
import { classNames } from '../../utils/classNames';
import { Link } from 'react-router-dom';
import { request } from '../../constans/Request';
import { API } from '../../constans/api';
import axios from 'axios';

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

export const Users: React.FC = () => {
  const [tableData, setTableData] = useState<TableDataItem[]>([]);
  const [isAddCustomerModalOpen, setAddCustomerOpen] = useState (false);
  
  const openAddCustomerModal = () => setAddCustomerOpen(true);
  const closeAddCustomerModal = () => setAddCustomerOpen(false);

  useEffect (() =>{
    const fetchData = async () => {
      try {
        const response = await fetch(API.USERS);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: TableDataItem[] = await response.json();
        setTableData(data); 
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
}, []);
  
  const handleEditClick = async (index: number) => {
    try{
      const userToUpdate = tableData[index];
      const updatedUser = {
        ...userToUpdate,
        phone: userToUpdate.phone.replace(/9/g, 'x'),
      };

      const newUser: TableDataItem = await request.put(`${API.USERS}/${updatedUser.id}`, updatedUser);

      setTableData((prevTableData) => {
        return prevTableData.map((user) => (user.id === newUser.id ? newUser : user));
      });
    }

    catch (error){
      console.error('Error updating user:', error);
    }
  };

  const handleRemoveClick = async (index: number): Promise<void> => {
    try {
        const userToDelete = tableData[index];

        const response = await axios.delete(`${API.USERS}/${userToDelete.id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status !== 200) {
            throw new Error(`Failed to delete user: ${response.statusText}`);
        }

        setTableData((prevTableData) => 
            prevTableData.filter((user) => user.id !== userToDelete.id)
        );

        console.log('User deleted successfully');
    } 
    catch (error) {
        console.error('Error deleting user:', error);
    }
};

  const handleSaveUser = async (userData: TableDataItem): Promise<void> => {
    try{
      const response = await axios.post<TableDataItem>(API.USERS, userData, { 
        headers: {
          'Content-Type': 'application/json',
      },
      });

      if (response.status !== 201){
        throw new Error(`Failed to add user: ${response.statusText}`);
      }

      const addUser = response.data;

      setTableData((prevTableData) => [...prevTableData, addUser]);
      console.log('User added successfully');
    }
    catch (error) {
      console.error('Error adding user:', error)
    }
  };

  return (
    <div className={classNames('info-and-filters')}>
      <div className={classNames('textAndButtons-container')}>
        <div className={classNames('text-container')}>
          <div className={classNames('info-text')}>Total: {tableData.length} customers</div>
          <Button
            variant='primary'
            text='Add New Customer'
            imageSrc=''
            alt=''
            onClick={() => {
                openAddCustomerModal();
            }}
         />
        </div>
        <div className={classNames('buttons-container')}>
          <button className={classNames('button1')}>Sort by: Date Created</button>
          <button className={classNames('button2')}>Filter</button>
        </div>
      </div>

      <div className={classNames('customers-container')}>
      <table>
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Edit</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={data.id}>
                <td>
                  <img src={data.avatar} alt={`Avatar ${index + 1}`} className={classNames('avatar-image')} />
                </td>
                <td><Link to={`/UserPage/${data.id}`}> {data.firstName} {data.lastName}</Link></td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.streetAddress}, {data.city}, {data.state}, {data.zipCode}</td>
                <td>
                  <Button
                    className={classNames('edit-button')}
                    variant="secondary"
                    text=""
                    imageSrc={data.edit}
                    alt={`edit ${index + 1}`}
                    onClick={() => handleEditClick(index)}
                  />
                </td>
                <td>
                  <Button
                    className={classNames('remove-button')}
                    variant="secondary"
                    text=""
                    imageSrc={data.remove}
                    alt={`remove ${index + 1}`}
                    onClick={() => handleRemoveClick(index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal isOpen={isAddCustomerModalOpen} onClose={closeAddCustomerModal} onSaveUser={handleSaveUser} variant='addCustomer'>
            <h2>Add New Customer</h2>
      </Modal>
    </div>
  );
};
