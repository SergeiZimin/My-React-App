import { useState } from 'react';
import { TableDataItem } from '../Users/CustomersData';
import { createPortal } from 'react-dom';
import './Modal.css';
import { Button } from '../Button/Button';
import { classNames } from '../../utils/classNames';
import edit2Image from './imginfoAndFilters/edit2.svg';
import trashImage from './imginfoAndFilters/trash.svg';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  variant: 'addCustomer';
  onSaveUser: (userData: TableDataItem) => void;
  children: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, variant, onSaveUser }) => {
  
  const [formData, setFormData] = useState <Partial <TableDataItem>> ({
    id: '',
    avatar: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    edit: edit2Image,
    remove: trashImage
  }); 

  const resetForm = () => {
    setFormData({
      id: '',
      avatar: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      streetAddress: '',
      city: '',
      state: '',
      zipCode: '',
      edit: edit2Image,
      remove: trashImage
    });
  };

  if (!isOpen) {
    return null;
  }  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSaveUser = () => {
    onSaveUser(formData);
    onClose();
  }
  
  const portalRoot = document.getElementById("portal-root");

  const getModalContent = () => {
    switch (variant) {
      case 'addCustomer':
        return (
          <div className="modal-parent-container"> 


            <div className='header-container'>

              <div className='add-new-customer-container'>
              <div>
            <p>Add New Customer</p>
            </div>
            </div>
            <div className='close-button-container'>
            <div className='close-button' onClick={()=> { onClose(); resetForm(); }}>
              &times;
            </div>
            </div>

            </div>

            <div className='middle-container'>
              <div className='add-avatar-container'>
                <div className='title-container'>
                  <p>
                    Avatar
                    </p>
                    </div>

                  <button className='add-avatar-button'>
                    ADD
                    </button>
              </div>

              <div className='customer-data-container'>
                  <div className='first-name-container'>
                      <p>First Name</p>
                      <input 
                      className='first-name-input' 
                      type = "text" 
                      name='firstName' 
                      value={formData.firstName} 
                      onChange={handleInputChange} 
                      placeholder=' Add Name'/>
                  </div>

                  <div className='last-name-container'>
                      <p>Last Name</p>
                      <input 
                      className='last-name-input' 
                      type = "text" 
                      name='lastName' 
                      value={formData.lastName} 
                      onChange={handleInputChange} 
                      placeholder=' Add Last Name'/>
                  </div>
              </div>

              <div className='customer-contact-data-container'>
                  <div className='email-container'>
                      <p>Email</p>
                      <input 
                      className='email-input' 
                      type = "text" 
                      name='email' 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      placeholder=' Add Email'/>
                  </div>

                  <div className='phone-container'>
                      <p>Phone</p>
                      <input className='phone-input' 
                      type = "text" 
                      name='phone' 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      placeholder=' Add Phone Number'/>
                  </div>
              </div>

              <div className='address-container'>
                <p>Address</p>
                <input 
                className='address-input' 
                type="text" 
                name='streetAddress' 
                value={formData.streetAddress} 
                onChange={handleInputChange} 
                placeholder=' Street Address'/>
              </div>

              <div className='address-secondcontainer'>
                <input 
                className='city-input' 
                type='text' 
                name='city' 
                value={formData.city} 
                onChange={handleInputChange} 
                placeholder=' City'/>

                <input 
                className='state-input'
                 type='text' 
                 name='state' 
                 value={formData.state} 
                 onChange={handleInputChange} 
                 placeholder=' State/Province'/>

                <input 
                className='code-input' 
                type='text' 
                name='zipCode' 
                value={formData.zipCode} 
                onChange={handleInputChange} 
                placeholder=' Zip Code'/>
              </div>
              
            </div>

            <div className='actions-container'>
              <div className='actions-button-container'>
              <Button
              className={classNames('modal-cancel-button')}
              variant='modal-cancel'
              text="Cancel"
              onClick={()=> { onClose(); resetForm(); }}
              />

              <Button 
              className = {classNames('modal-save-button')}
              variant = 'modal-save'
              text = "Save Customer"
              onClick = {() => { handleSaveUser(); resetForm();}}
               />
              </div>
            </div>
          </div>
        );

      default: 
          return <>{children}</>;
    }
  };

  return createPortal (
    <div className = {`modal-overlay`} onClick={onClose}>
      <div className = {`modal-content ${variant}`} onClick={(e) => e.stopPropagation()}>
        {getModalContent()}
      </div>
      </div>,
      portalRoot!
  )
}
