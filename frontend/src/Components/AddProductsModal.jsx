import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import React from 'react'

const AddProductsModal = ({isOpen, onClose}) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                mjafhshguw
            </ModalBody>
            <ModalFooter>
                <Button>Close</Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
  )
}

export default AddProductsModal;