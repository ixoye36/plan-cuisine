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
  
  @media screen and (max-width: 767px)
  {
    .ft__lists {
      flex-direction: column;
      gap: 1rem !important;
    }
  }
 
`;

const Footer = () => (
    <Styles>
      <footer className="page-footer font-small blue pt-4">
        <div className="vstack gap-3 justify-content-center align-items-center text-center">
          <div className="logo-footer">
            <Link href="/">
                    <a className="ft-logo-section">
                      <Image className="ft__logo" src={Logo} alt="" />
                    </a>
            </Link>
          </div>
          <div className="links">
            <ul className="list-unstyled ft__lists hstack gap-5 align-items-center">
              <li>
                <Link className="ft__a" href="#">
                  A propos
                </Link>
              </li>
              <li>
                <Link className="ft__a" href="cgu">
                  Conditions générales de ventes
                </Link>
              </li>
              <li>
                <Link className="ft__a" href="mentions-legales">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
          <div className="col col-md-2 mb-md-0 mb-2 d-none">
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
          <div className="footer-copyright text-center text-white py-3">
            ©{new Date().getFullYear()} CuisinePlan
          </div>
        </div>
      </footer>
    </Styles>
  );

export default Footer;
