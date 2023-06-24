/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect, useState } from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import Image from 'next/image'
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";


type meme = {
    url : string,
    name : string,
}

export const MemeCard = ({ url, name }: meme) => {
  const [showModal, setShowModal] = useState(false);
  const {register, handleSubmit, reset, formState} = useForm({ defaultValues: {email: ""}});


  const onSubmit = (data: any, _props: any) => {
    toast.success(`${name} sent to ${data?.email}`);
    setShowModal(false);
  }
  
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ email: "" })
    }
  }, [formState, reset])

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <Card>
      <Card.Img variant="top" src={url} style={{ width: "200px", height: "200px", margin: "100px" }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Button onClick={handleShow}>Meme Me</Button>


        <Modal show={showModal} onHide={handleClose} dialogClassName="modal-70w">
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Image src={`http://www.apimeme.com/meme?meme=${name}&top=Top+text&bottom=Bottom+text`} alt= {name?? "Meme Image"} width={650} height={650} />
            </Row>
            <Row>
              <Form onSubmit={handleSubmit(data => onSubmit(data, name))}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email here"
                    {...register("email", {required: true})}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
              </Form>
            </Row>

          </Container>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </Card.Body>
    </Card>
  );
}