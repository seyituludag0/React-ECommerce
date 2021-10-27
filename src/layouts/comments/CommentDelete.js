import React,{useState} from 'react'
import { Button, Modal } from "semantic-ui-react";
import { Delete } from '@material-ui/icons';
import { toast } from 'react-toastify';
import CommentService from "../../services/CommentService";

export default function CommentDelete({ id }) {

    const [open, setOpen] = useState(false)

    const deleteComment = () => {
        let commentService = new CommentService();
        commentService.deleteComment(id).then((result)=>toast.success(result.data.message))
    }

    return (
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={
                    <Delete style={{cursor:"pointer"}} fontSize="large" />
                }
                style={{height:"15rem", marginLeft:"23rem", marginTop:"17rem"}}
            >
                <Modal.Header>Yorumunuzu silmek üzeresiniz!</Modal.Header>
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
                        onClick={() => deleteComment()}
                        danger
                    />
                </Modal.Actions>
            </Modal>
    )
}
