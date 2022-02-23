import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

export default function DeleteProductFromCart() {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      {/* <Modal
        trigger={<Button>Ürünü Sil</Button>}
        header=""
        content=""
        actions={["Vazgeç", { key: "done", content: "Done", positive: true }]}
      /> */}

      <Modal
        closeIcon
        open={open}
        trigger={<Button>Ürünü Sil</Button>}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Header content="SİL VE FAVORİLERE EKLE" />
        <Modal.Content>
          <p>Kuruyan Ve Çatlayan Dudaklara Yoğun Bakım Gkf 15 Medplus Stick Spf15 4,25 G adlı ürünü sepetinden çıkardıktan sonra favoriye eklemek ister misin?</p>
        </Modal.Content>
        <Modal.Actions>
        <Button color="red" onClick={() => setOpen(false)}>
            <Icon name="remove" /> Vazgeç
          </Button>
          <Button color="orange" onClick={() => setOpen(false)}>
            <Icon name="remove" /> Sil
          </Button>
          <Button color="green" onClick={() => setOpen(false)}>
            <Icon name="checkmark" /> Sil ve Favorilere Ekle
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}
