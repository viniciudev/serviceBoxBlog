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
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-primary"
        style={{
          backgroundImage:
            "url(" + require("assets/img/IMG_3834.JPG") + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h2 className="presentation-title">Blog de serviços</h2>
              <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
            </div>
            <h2 className="presentation-subtitle text-center">
              {/* <small class="text-dark font-weight-bold">Mary Key</small> */}
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
          }}
        />
        <h6 className="category category-absolute">
          <small class="text-dark font-weight-bold">FRASE</small> AQUI!{" "}
          <a
            href="https://web.whatsapp.com/"
            target="_blank"
          >
            <i class="fab fa-whatsapp-square"></i>
            {/* <img
              alt="..."
              className="creative-tim-logo"
              src={require("assets/img/usa-removebg-preview.png")}
            /> */}
          </a>
        </h6>
      </div>
    </>
  );
}

export default IndexHeader;
