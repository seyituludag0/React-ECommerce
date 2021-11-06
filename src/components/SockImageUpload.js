import React, { Component } from "react";
import { toast } from "react-toastify";
import { Card, Button } from "semantic-ui-react";
import SockImageService from "../services/SockImageService"

export default class SockImageUpload extends Component {
    state = {
      selectedFile: null,
      nullImages: []
    };
    
  
    fileSelectedHandler = (event) => {
      this.setState({
        selectedFile: event.target.files[0],
      });
    };
  
    fileUploadHandler = () => {
      const formData = new FormData();
      formData.append(
        "file1",
        // "file2",
        // "file3",
        // "file4",
        // "file5",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
      let sockImageService = new SockImageService();
      sockImageService.uploadPhoto1(this.props.id, formData).then((result) => {toast.success(result.data.message)})
      // sockImageService.uploadPhoto2(this.props.id, formData).then((result) => {toast.success(result.data.message)})
      // sockImageService.uploadPhoto3(this.props.id, formData).then((result) => {toast.success(result.data.message)})
      // sockImageService.uploadPhoto4(this.props.id, formData).then((result) => {toast.success(result.data.message)})
      // sockImageService.uploadPhoto5(this.props.id, formData).then((result) => {toast.success(result.data.message)})
        .catch((result) => {
          toast.error(result.response.data.message);
        });
    };

    getNullImages = () => {
      let sockImageService = new SockImageService();
      sockImageService.getAllSockImageNull().then((result)=>this.setState({nullImages: result.data.data}))
    };

    componentDidMount() {
      this.getNullImages();
    }
  
    render() {
      return (
        <div>
          {
            this.state.nullImages.map((images)=>(
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
            ))
          }
        </div>
      );
    }
  }
  