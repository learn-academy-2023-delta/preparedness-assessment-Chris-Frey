import React, { useState } from 'react';
// import styles from './src/App.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const MainModal = ({formValue}) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
    // console.log(formValue);
  }

  return (
    <div>
      <Button color="danger" onClick={toggle}  className='buttons' id='clickMe'>
        Click Me
      </Button>
      {/* toggle={toggle} {...props} */}
      <Modal className="mode" isOpen={modal} >
        <ModalHeader>Hey There {formValue}</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default MainModal;