import React,{useState} from 'react'
import { Icon, Button, Modal } from "semantic-ui-react";
import { toast } from 'react-toastify';
import UserAddressService from '../../services/UserAddressService';

export default function AddressDelete({ id }) {

    const [open, setOpen] = useState(false)

    const deleteAddress = () => {
        let userAddressService = new UserAddressService();
        userAddressService.delete(id).then(result=>toast.success(result.data.message));
        setOpen(false)
    }

    return (
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={
                    <Icon name="trash"/>
                }
                style={{height:"15rem", marginLeft:"23rem", marginTop:"17rem"}}
            >
                <Modal.Header>Adresinizi silmek üzeresiniz!</Modal.Header>
                <Modal.Content>
                    Onaylıyor musunuz?
                </Modal.Content>
                <Modal.Actions>
                    <Button color='red' onClick={() => setOpen(false)}>
                        Vazgeç
                    </Button>
                    <Button
                        content="Evet"
                        labelPosition='right'
                        icon='checkmark'
                        primary
                        onClick={() => deleteAddress()}
                        danger
                    />
                </Modal.Actions>
            </Modal>
    )
}
