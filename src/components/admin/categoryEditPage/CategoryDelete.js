import React,{useState} from 'react'
import { Icon, Button, Modal } from "semantic-ui-react";
import { toast } from 'react-toastify';
import CategoryService from '../../../services/CategoryService';

export default function CategoryDelete({id}) {

    const [open, setOpen] = useState(false)

    const deleteCategory = () => {
        let categoryService = new CategoryService();
        categoryService.delete(id).then(result=>toast.success(result.data.message));
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
                <Modal.Header>Kategoriyi silmek üzeresiniz!</Modal.Header>
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
                        onClick={() => deleteCategory()}
                        danger
                    />
                </Modal.Actions>
            </Modal>
    )
}
