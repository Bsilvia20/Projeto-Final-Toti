import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "../CSS/Atualizar.css";

function Atualizar() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  
    return (
      <>
        <Button className="btn-cadastro" onClick={handleShow}>
          Cadastrar Carro
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Cadastro</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Id</Form.Label>
                    <Form.Control type="text" placeholder="Id" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Marca</Form.Label>
                    <Form.Control type="text" placeholder="Marca" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Modelo</Form.Label>
                    <Form.Control type="text" placeholder="Modelo" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Ano</Form.Label>
                    <Form.Control type="number" placeholder="Ano" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Preço</Form.Label>
                    <Form.Control type="text" placeholder="Preço" />
                </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default Atualizar;
