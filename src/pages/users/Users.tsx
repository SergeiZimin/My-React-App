import React, { useState } from 'react';
import { initialTableData, TableDataItem } from './CustomersData';
import '../../components/layout/infoAndFilters/InfoAndFilters.css';

  export const Users: React.FC = () => {
    const [tableData, setTableData] = useState<TableDataItem[]>(initialTableData);

    const handleEditClick = (index: number) => {
    setTableData((prevTableData) => {
      return prevTableData.map((data, dataIndex) => {
        if (dataIndex === index) {
          return {
            ...data, 
            phone: data.phone.replace(/9/g, 'X')
          }
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

  return (
    <div className="info-and-filters">
      <div className="textAndButtons-container">
        <div className="text-container">
          <div className="info-text">Total: 78 customers</div>
        </div>
        <div className="buttons-container">
          <button className='button1'>Sort by: Date Created</button>
          <button className='button2'>Filter</button>
        </div>
      </div>

      <div className="customers-container">
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
                  <img src={data.avatar} alt={`Avatar ${index + 1}`} className="avatar-image" />
                </td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.address}</td>
                <td>

                  <button className="edit-button" onClick={() => handleEditClick(index)}>
                    <img src={data.edit} alt={`edit ${index + 1}`} className="edit-image" />
                  </button>
                </td>

                <td>
                  <button className="remove-button" onClick={() => handleRemoveClick(index)}>
                    <img src={data.remove} alt={`remove ${index + 1}`} className="remove-image" />
                  </button>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
