import React,{useState} from 'react'
import { Icon, Button, Modal } from "semantic-ui-react";
import { toast } from 'react-toastify';
import BrandService from '../../../services/BrandService';
import CampaignManagementService from '../../../services/CampaignManagementService';

export default function CampaignDelete( {id} ) {

    const [open, setOpen] = useState(false)

    const deleteCampaign = () => {
        let campaignManagementService = new CampaignManagementService();
        campaignManagementService.delete(id).then(result=>toast.success(result.data.message));
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
                <Modal.Header>Kampanyayı silmek üzeresiniz!</Modal.Header>
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
                        onClick={() => deleteCampaign()}
                        danger
                    />
                </Modal.Actions>
            </Modal>
    )
}
