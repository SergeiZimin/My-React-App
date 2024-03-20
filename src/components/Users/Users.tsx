import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import { initialTableData, TableDataItem } from './CustomersData';
import '../../components/layout/infoAndFilters/InfoAndFilters.css';
import { classNames } from '../../utils/classNames';

export const Users: React.FC = () => {
  const [tableData, setTableData] = useState<TableDataItem[]>(initialTableData);

  const [isAddCustomerModalOpen, setAddCustomerOpen] = useState (false);

  const openAddCustomerModal = () => setAddCustomerOpen(true);
  const closeAddCustomerModal = () => setAddCustomerOpen(false);
  
  const handleEditClick = (index: number) => {
    setTableData((prevTableData) => {
      return prevTableData.map((data, dataIndex) => {
        if (dataIndex === index) {
          return {
            ...data,
            phone: data.phone.replace(/9/g, 'X'),
          };
        }
        return data;
      });
    });
  };

  const handleRemoveClick = (index: number) => {
    setTableData((prevTableData) => {
      return prevTableData.filter((_, dataIndex) => dataIndex !== index);
    });
  };

  const handleSaveUser = (userData: TableDataItem) => {
    setTableData((prevTableData) => [...prevTableData, userData]);
    closeAddCustomerModal();
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
              <tr key={index}>
                <td>
                  <img src={data.avatar} alt={`Avatar ${index + 1}`} className={classNames('avatar-image')} />
                </td>
                <td>{data.firstName} {data.lastName}</td>
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
      <Modal 
        isOpen={isAddCustomerModalOpen}
        onClose={closeAddCustomerModal}
        onSaveUser={handleSaveUser}
        variant='addCustomer'>
            <h2>Add New Customer</h2>
      </Modal>
    </div>
  );
};
