import React, { Component } from "react";
import { toast } from "react-toastify";
import { Card, Button } from "semantic-ui-react";
import SockImageService from "../services/SockImageService"

export default class UpdateImage extends Component {
    state = {
      selectedFile: null,
    };
  
    fileSelectedHandler = (event) => {
      this.setState({
        selectedFile: event.target.files[0],
      });
    };
  
    fileUploadHandler = () => {
      const formData = new FormData();
      formData.append(
        "file",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
      let sockImageService = new SockImageService();
      sockImageService
        .upload(this.props.id, formData)
        .then((result) => {
          toast.success(result.data.message);
        //   this.props.updateCvValues();
        console.log(result);
        })
        .catch((result) => {
          toast.error(result.response.data.message);
        });
    };
  
    render() {
      return (
        <div>
          <Card fluid color={"black"}>
            <Card.Content header="Resim Yükle" />
            <Card.Content style={{}}>
              <input
                style={{ display: "none" }}
                type="file"
                onChange={this.fileSelectedHandler}
                ref={(fileInput) => (this.fileInput = fileInput)}
              />
              <button className="ui button" onClick={() => this.fileInput.click()}>Dosya Seç</button>
              <Button color={"green"} onClick={this.fileUploadHandler} disabled={this.state.selectedFile==null}>Yükle</Button>
            </Card.Content>
          </Card>
        </div>
      );
    }
  }
  