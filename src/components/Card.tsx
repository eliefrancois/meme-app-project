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
    description : string,
}

export const MemeCard = ({ url, name, description }: meme) => {
  const [showModal, setShowModal] = useState(false);
  const {register, handleSubmit, reset, formState} = useForm({ defaultValues: {email: ""}});


  const onSubmit = (data: any) => {
    toast.success(`Meme sent to ${data?.email}`);
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
    <Card style={{ width: "18rem", margin: "2rem" }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button onClick={handleShow}>Meme Me</Button>


        <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row style={{justifyItems: "center"}}> 
              {description}
            </Row>
            <Row>
              <Image src={url} alt= {name?? "Meme Image"} width={550} height={550} />
            </Row>
            <Row>
              <Form onSubmit={handleSubmit(onSubmit)}>
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