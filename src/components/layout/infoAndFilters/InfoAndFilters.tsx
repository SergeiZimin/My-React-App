/*import React, { useState } from 'react';
import './InfoAndFilters.css';

interface TableData {
  avatar: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  edit: string;
  remove: string;
}

export const InfoAndFilters: React.FC = () => {
  const [tableData, setTableData] = useState<TableData[]>([
    { avatar: 'src/components/layout/infoAndFilters/imginfoAndFilters/Avatar1.jpg', name: 'Deanna Annis', email: 'deannannis@gmail.com', phone: '999-999-9999', address: '475 Spruce Drive, Pittsburgh, PA 123', edit: 'src/components/layout/infoAndFilters/imginfoAndFilters/edit-2.svg', remove: 'src/components/layout/infoAndFilters/imginfoAndFilters/trash.svg'},
    { avatar: 'src/components/layout/infoAndFilters/imginfoAndFilters/Avatar2.jpg', name: 'George Gamble', email: 'goeorgegamble@gmail.com', phone: '999-999-9999', address: '2213 Thorn Street, Glenrock, WY 321', edit: 'src/components/layout/infoAndFilters/imginfoAndFilters/edit-2.svg', remove: 'src/components/layout/infoAndFilters/imginfoAndFilters/trash.svg'},
    { avatar: 'src/components/layout/infoAndFilters/imginfoAndFilters/Avatar2.jpg', name: 'Andrea Willis', email: 'andreawillis@gmail.com', phone: '999-999-9999', address: '1952 Chicago Avenue, Fresno, PA 935', edit: 'src/components/layout/infoAndFilters/imginfoAndFilters/edit-2.svg', remove: 'src/components/layout/infoAndFilters/imginfoAndFilters/trash.svg'},
    { avatar: 'src/components/layout/infoAndFilters/imginfoAndFilters/Avatar2.jpg', name: 'Andrea Willis', email: 'andreawillis@gmail.com', phone: '999-999-9999', address: '1952 Chicago Avenue, Fresno, PA 935', edit: 'src/components/layout/infoAndFilters/imginfoAndFilters/edit-2.svg', remove: 'src/components/layout/infoAndFilters/imginfoAndFilters/trash.svg'},
    { avatar: 'src/components/layout/infoAndFilters/imginfoAndFilters/Avatar2.jpg', name: 'Andrea Willis', email: 'andreawillis@gmail.com', phone: '999-999-9999', address: '1952 Chicago Avenue, Fresno, PA 935', edit: 'src/components/layout/infoAndFilters/imginfoAndFilters/edit-2.svg', remove: 'src/components/layout/infoAndFilters/imginfoAndFilters/trash.svg'} ,
    { avatar: 'src/components/layout/infoAndFilters/imginfoAndFilters/Avatar2.jpg', name: 'Andrea Willis', email: 'andreawillis@gmail.com', phone: '999-999-9999', address: '1952 Chicago Avenue, Fresno, PA 935', edit: 'src/components/layout/infoAndFilters/imginfoAndFilters/edit-2.svg', remove: 'src/components/layout/infoAndFilters/imginfoAndFilters/trash.svg'},
    { avatar: 'src/components/layout/infoAndFilters/imginfoAndFilters/Avatar2.jpg', name: 'Andrea Willis', email: 'andreawillis@gmail.com', phone: '999-999-9999', address: '1952 Chicago Avenue, Fresno, PA 935', edit: 'src/components/layout/infoAndFilters/imginfoAndFilters/edit-2.svg', remove: 'src/components/layout/infoAndFilters/imginfoAndFilters/trash.svg'},
  
  ]);

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
*/





