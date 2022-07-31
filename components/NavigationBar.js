import styled from "styled-components";
import Image from "next/future/image";
import Link from "next/link";
import Logo from "../assets/images/logo_transparent.svg";

const Styles = styled.div`
    position: relative;
    .navbar {
        background-color: var(--dsg-100);
        max-height: var(--header-h, 90px);
        z-index: 1;
    }    
    
    .navbar-brand, .navbar-nav .nav-item > a {
        color: white !important;
        text-decoration: none;
        &:hover {
            var(--spacecdt-70) !important;
        }
    }
    
`;

const NavigationBar = () => (
  <Styles>
    <nav className="navbar py-4 navbar-expand-lg">
      <div className="container">
        <div className="navbar-brand nav-logo">
          <Link href="/">
            <a>
              <Image src={Logo} alt="" />
            </a>
          </Link>
        </div>
        <div className="collapse navbar-collapse ms-5" id="basic-navbar-nav">
          <ul className="navbar-nav me-auto align-items-center d-none">
            <li className="nav-item me-4">
              <a className="nav-link" href="#">Accueil</a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link" href="#">Blog</a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link" href="#">A propos</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </Styles>
);

export default NavigationBar;
