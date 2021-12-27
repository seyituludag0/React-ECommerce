import React,{useState} from 'react'
import { Icon, Button, Modal } from "semantic-ui-react";
import { toast } from 'react-toastify';
import ProductService from '../../../services/ProductService';

export default function ProductDelete({id}) {

    const [open, setOpen] = useState(false)

    const deleteProduct = () => {
        let productService = new ProductService();
        productService.delete(id).then(result=>toast.success(result.data.message));
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
                        onClick={() => deleteProduct()}
                        danger
                    />
                </Modal.Actions>
            </Modal>
    )
}
