import React, { useState } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import AddressAdd from './AddressAdd';

export default function AcilirForm() {
  const [open, setOpen] = useState(false)

  const myStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50rem",
    height: "45rem",
    // bgcolor: "gray",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Yeni Adres Gir</Button>}
      style={myStyle}
    >
      <Modal.Header>Yeni Adres Giriniz</Modal.Header>
      <Modal.Description>
          <AddressAdd />
      </Modal.Description>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          İptal
        </Button>
        <Button
          content="Devam"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}
