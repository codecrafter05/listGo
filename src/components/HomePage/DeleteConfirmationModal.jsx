import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function DeleteConfirmationModal({ show, onHide, onDelete }) {
  return (
    <Modal 
      show={show} 
      onHide={onHide}
      dialogClassName="modal-dialog-centered" // Add this line to center the modal
    >
      <Modal.Header closeButton>
        <Modal.Title>Delete Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to delete this item?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>No</Button>
        <Button variant="danger" onClick={onDelete}>Yes, Delete</Button>
      </Modal.Footer>
    </Modal>
  );
}