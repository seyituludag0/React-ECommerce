import React, { useEffect, useState } from "react";
import { Card, Icon } from "semantic-ui-react";
import UserAddressService from "../../services/UserAddressService";
import AddressAdd from "./AddressAdd";
import AddressUpdate from "./AddressUpdate";
import { Modal, Box, Button, FormControlLabel, Radio } from "@material-ui/core";
import CustomAccordion from "./CustomAccordion";
import AddressDelete from "./AddressDelete";
export default function MyAddresses() {

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "65rem",
        height: "45rem",
        boxShadow: 24,
        p: 4,
      };

  const customerId = localStorage.getItem("userId");
  let userAddressService = new UserAddressService();
  const [userAddress, setUserAddress] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(false)

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  useEffect(() => {
    userAddressService
      .getByCustomerId(customerId)
      .then((result) => setUserAddress(result.data));
  }, []);

  const radioButton = (e) => {
    setSelectedAddress(true)
    console.log(e.target.value)
  }

  return (
    <div>
      <Card
        fluid
        style={{ height: "3rem" }}
        color="red"
        header="Adreslerim"
        centered
       />
<Button style={{float:"right"}} onClick={handleOpenModal}>EKLE</Button>
    <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddressAdd />
        </Box>
      </Modal>

      {userAddress.map((address) => (
        <>
        <FormControlLabel control={<Radio />} value={address} onChange={(e) => console.log(e.target.value)} />
        <Card>
          <Card.Content header={`${address.city.name}/${address.district.name}`} />
          <Card.Content header={`${address.firstName} ${address.lastName}`} />
          <Card.Content description={`${address.openAddress} - ${address.phoneNumber}` }  />
          <Card.Content extra>
           <a>
                <AddressDelete id={address?.id} />
                Sil
            </a>
            <a style={{float:"right"}}>
              <AddressUpdate address={address} />
            </a> 
          </Card.Content>
        </Card>
        </>
      ))}

      {/* <CustomAccordion /> */}
    </div>
  );
}
