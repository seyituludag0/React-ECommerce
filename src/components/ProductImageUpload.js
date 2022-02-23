import React, { Component } from "react";
import { toast } from "react-toastify";
import { Card, Button } from "semantic-ui-react";
import ProductImageService from "../services/ProductImageService"

export default class ProductImageUpload extends Component {
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
      let productImageService = new ProductImageService();
      productImageService.uploadPhoto1(this.props.id, formData).then((result) => {toast.success(result.data.message)})
      // productImageService.uploadPhoto2(this.props.id, formData).then((result) => {toast.success(result.data.message)})
      // productImageService.uploadPhoto3(this.props.id, formData).then((result) => {toast.success(result.data.message)})
      // productImageService.uploadPhoto4(this.props.id, formData).then((result) => {toast.success(result.data.message)})
      // productImageService.uploadPhoto5(this.props.id, formData).then((result) => {toast.success(result.data.message)})
        .catch((result) => {
          toast.error(result.response.data.message);
        });
    };
    
    getNullImages = () => {
      console.log("this.state.nullImages: ", this.state.nullImages);
      let productImageService = new ProductImageService();
      productImageService.getAllProductImageNull().then((result)=>this.setState({nullImages: result.data.data}))
    };

    componentDidMount() {
      this.getNullImages();
    }
  
    render() {
      return (
        <div>
          {
            this.state.nullImages.map((images)=>(
              <Card>
            <Card.Content header="Resim Yükle" />
            <Card.Content>
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
  