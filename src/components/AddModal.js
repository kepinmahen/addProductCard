import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from "reactstrap";
import { addProductAction } from "../redux/actions";
import { connect } from "react-redux";


class AddModal extends Component {
  state = {
          nama: "",
          harga: 0,
          caption: "",
          stock: 0,
          isAvailable: 1,
  };

  onChangeInput = (e) => {
    this.setState({
            [e.target.id]: e.target.value,
    });
};


  render() {
      const addData = this.state;
    const { isOpen, toggle, addProductAction } = this.props;
    return (
      <div>
        <Modal isOpen={isOpen} toggle={toggle}>
          <ModalHeader toggle={toggle}>Add product ?</ModalHeader>
          <ModalBody>
            
            <p>Product name:</p>
            <Input 
            id="nama"
            type="text"
            onChange={this.onChangeInput}/>
            <p>Price:</p>
            <Input 
            id="harga"
            type="number"
            onChange={this.onChangeInput}/>
            <p>Caption:</p>
            <Input  
            id="caption"
            type="text"
            onChange={this.onChangeInput}/>
            <p>Stock:</p>
            <Input 
            id="stock"
            type="number"
            onChange={this.onChangeInput}/>
          </ModalBody>

          {/* <ModalBody>Apakah anda ingin menambah ?</ModalBody> */}
          <ModalFooter>
            <Button color="danger" onClick={()=> addProductAction(addData)}>
              Add Product
            </Button>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default connect(null, {
	addProductAction,
})(AddModal);
