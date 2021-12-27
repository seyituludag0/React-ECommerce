import React,{useState} from 'react'
import { Icon, Button, Modal } from "semantic-ui-react";
import { toast } from 'react-toastify';
import BrandService from '../../../services/BrandService';

export default function BrandDelete({id}) {

    const [open, setOpen] = useState(false)

    const deleteBrand = () => {
        let brandService = new BrandService();
        brandService.delete(id).then(result=>toast.success(result.data.message));
        setOpen(false)
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
                <Modal.Header>Markayı silmek üzeresiniz!</Modal.Header>
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
                        onClick={() => deleteBrand()}
                        danger
                    />
                </Modal.Actions>
            </Modal>
    )
}
