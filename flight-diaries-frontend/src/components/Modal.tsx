// src/components/Modal.tsx
import React from 'react';
import { ModalProps } from '../types';
import AddEntry from './AddEntry';
import Error from './Error';

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, error, showError }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal}>
          &times;
        </button>
        <Error error={error} />
        <AddEntry closeModal={closeModal} showError={showError}/>
      </div>
    </div>
  );
};

export default Modal;
