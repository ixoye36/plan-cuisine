import styled from "styled-components";
import Link from "next/link";
import Image from "next/future/image";
import Logo from "../assets/images/logo_transparent.svg";
import Linkedin from "../assets/images/linkedin.svg";
import Facebook from "../assets/images/facebook.svg";
import Instagram from "../assets/images/instagram.svg";
import Twitter from "../assets/images/twitter.svg";

const Styles = styled.div`
  position: relative;
  min-height: var(--footer-h, 326px);
  max-height: var(--footer-h, 346px);
  background-color: var(--dsg-100);

  .social__logo {
    flex: 1;
    padding: 0;
  }

  .social__logo img {
    max-width: 30px;
  }

  .social__logo:hover img {
    filter: invert(82%) sepia(18%) saturate(4004%) hue-rotate(329deg) brightness(101%) contrast(101%);
  }

  .ft-logo-section {
    display: block;
    max-width: 240px;
  }

  .ft__lists a {
    text-decoration: none;
    color: white;
    opacity: .5;
  }

  .ft__lists a:hover {
    color: var(--yellowo-100);
  }
  
  .h6 {
    color: white;
  }
 
`;

const Footer = () => (
    <Styles>
      <footer className="page-footer font-small blue pt-4">
        <div className="container">
          <div className="row py-5 align-top">
            <div className="col col-md-4 mt-md-0 mt-4">
              <Link href="/">
                <a className="ft-logo-section">
                  <Image className="ft__logo" src={Logo} alt="" />
                </a>
              </Link>
            </div>

            <div className="col col-md-2 mb-md-0 mb-2">
              <div className="h6">About us</div>
              <ul className="list-unstyled ft__lists">
                <li>
                  <Link className="ft__a" href="#">
                    Features
                  </Link>
                </li>
                <li>
                  <Link className="ft__a" href="#">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link className="ft__a" href="#">
                    Blog
                  </Link>{" "}
                </li>
                <li>
                  <Link className="ft__a" href="#">
                    Help
                  </Link>{" "}
                </li>
              </ul>
            </div>

            <div className="col col-md-3 mb-md-0 mb-3">
              <div className="h6">Legal</div>
              <ul className="list-unstyled ft__lists">
                <li>
                  <Link className="ft__a" href="#!">
                    Legal terms
                  </Link>{" "}
                </li>
                <li>
                  <Link className="ft__a" href="#!">
                    Terms of use
                  </Link>{" "}
                </li>
                <li>
                  <Link className="ft__a" href="#!">
                    Privacy Policy
                  </Link>{" "}
                </li>
                <li>
                  <Link className="ft__a" href="#!">
                    Cookie
  ©                </Link>{" "}
                </li>
              </ul>
            </div>
            <div className="col col-md-2 mb-md-0 mb-2">
              <div className="row d-flex flex-row justify-content-start">
                <a className="ft__a social__logo" href="#!">
                  <Image
                    className="svg__azureishw-100"
                    src={Linkedin}
                    alt=""
                    layout="raw"
                  />
                </a>
                <a className="ft__a social__logo" href="#!">
                  <Image
                    className="svg__azureishw-100"
                    src={Facebook}
                    alt=""
                    layout="raw"
                  />
                </a>
                <a className="ft__a social__logo" href="#!">
                  <Image
                    className="svg__azureishw-100"
                    src={Instagram}
                    alt=""
                    layout="raw"
                  />
                </a>
                <a className="ft__a social__logo" href="#!">
                  <Image
                    className="svg__azureishw-100"
                    src={Twitter}
                    alt=""
                    layout="raw"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center text-white py-3">
          ©{new Date().getFullYear()} Futto
        </div>
      </footer>
    </Styles>
  );

export default Footer;
