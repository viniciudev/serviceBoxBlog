/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container, Col, Nav, NavItem, NavLink, Collapse } from "reactstrap";
const style = {
  marginLeft: '10%'
}
const styleTop = {
  //width: '60%',
  marginTop: '2%'
}
function DemoFooter() {
  return (
    <footer>

      <Container>
        <Row>
          <Col md='4'>
            <nav>
              <ul>
                <li>
                  <a >
                    <small> <h4> Acompanhe nas redes Sociais.</h4></small>
                  </a>
                  <div>


                    <Nav navbar>
                      <Row>
                        <Col md="2">
                          <NavItem>
                            <NavLink
                              data-placement="bottom"
                              href="https://twitter.com/CreativeTim?ref=creativetim"
                              target="_blank"
                              title="Facebook"
                            >
                              <i style={style} className="fa fa-facebook-square fa-2x" />

                            </NavLink>
                          </NavItem>
                        </Col>
                        <Col md="2">
                          <NavItem>
                            <NavLink
                              data-placement="bottom"
                              href="https://twitter.com/CreativeTim?ref=creativetim"
                              target="_blank"
                              title="Instagram"
                            >
                              <i style={style} className="fa fa-instagram fa-2x" />

                            </NavLink>
                          </NavItem>
                        </Col>
                        <Col md="1">
                          <NavItem>
                            <NavLink
                              data-placement="bottom"
                              href="https://api.whatsapp.com/send?phone=5534996656716&text=Olá, seja bem vindo(a) ao meu site. Qual produto você mais gostou?"
                              target="_blank"
                              title="Whatsapp"
                            >
                              <i style={style} className="fa fa-whatsapp fa-2x" />

                            </NavLink>
                          </NavItem>
                        </Col>
                      </Row>
                    </Nav>
                  </div>
                </li>
              </ul>
            </nav>

          </Col>
          <Col md='3'>
            <nav >
              <ul>
                <li>
                  <a>
                    <small> <h4> Telefone de Contato</h4></small>
                  </a>
                  <a>
                    <h5> (34) 9 9665-6716</h5>
                  </a>
                  <br />
                </li>

              </ul>
            </nav>
          </Col>
          <div style={styleTop} className="credits ml-auto ">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Viníciu Oliveira
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
