import React from "react";
import { Container, Row, Col, Table , Image} from "react-bootstrap";
import {FiPhoneCall} from "react-icons/fi"
import {ImMobile} from "react-icons/im"
import {AiOutlineMail} from "react-icons/ai"
const Contact = () => {
  return (
    <>
      <Container style={{marginTop: 40}}>
        <Row>
          <Col md={6}>
            <h1>Techinfo YT Pizza Shop</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              exercitationem, a asperiores doloremque vitae iusto provident id
              est dolorum nemo, sit, temporibus necessitatibus quod fuga rem
              voluptate aut? Amet aut consectetur fugiat eius. Dolorum assumenda
              voluptatem delectus mollitia animi, iusto quaerat explicabo eius,
              ducimus a earum totam fugiat quas recusandae quo eaque. Repellat
              ullam repellendus est minus itaque asperiores laboriosam autem aut
              consequuntur, dicta rem! Odit vel impedit asperiores deserunt.
              Quo, culpa. Quam molestias rem quisquam nemo itaque neque at natus
              placeat, tempore earum nam reiciendis quia quibusdam optio
              eligendi cum debitis quidem impedit maxime veritatis laboriosam
              odit dolor ipsum?
            </p>
            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>--- Contact Details  ---</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th><FiPhoneCall /></th>
                  <td>Phone</td>
                  <td>3458-55604234</td>
                </tr>
                <tr>
                  <th><ImMobile /></th>
                  <td>Call</td>
                  <td>970345804234</td>
                </tr>
                <tr>
                  <th><AiOutlineMail /></th>
                  <td>Email</td>
                  <td>dump@gmail.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image src="images/farmhouse.jpg" style={{width: "100%" , height:"100%"}}/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
