import React,{useState} from 'react'
import { Icon, Button, Modal } from "semantic-ui-react";
import { toast } from 'react-toastify';
import SockService from '../../../services/SockService';

export default function SockDelete({id}) {

    const [open, setOpen] = useState(false)

    const deleteSock = () => {
        let sockService = new SockService();
        sockService.delete(id).then(result=>toast.success(result.data.message));
    }

    return (
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={
                    <Icon name="x"/>
                }
                style={{height:"15rem", marginLeft:"23rem", marginTop:"17rem"}}
            >
                <Modal.Header>Ürünü  silmek üzeresiniz!</Modal.Header>
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
                        onClick={() => setOpen(false)}
                        onClick={() => deleteSock()}
                        danger
                    />
                </Modal.Actions>
            </Modal>
    )
}
