import styled from "styled-components";
import Image from "next/future/image";
import Link from "next/link";
import Logo from "../assets/images/logo_transparent.svg";
import {useRouter} from "next/router";

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

const NavigationBar = () => {
  const router = useRouter()
  return (
    <Styles>
      <nav className="navbar py-4 navbar-expand-lg">
        <div className="container">
          <div className="navbar-brand nav-logo">
            <Link href="/">
              <a>
                <Image src={Logo} alt=""/>
              </a>
            </Link>
          </div>
          <div className="collapse navbar-collapse ms-5" id="basic-navbar-nav">
            <ul className="navbar-nav ms-auto align-items-center d-none">
              <li className="nav-item me-4">
                <button type="button" className="btn btn-primary" onClick={() => router.push('/')}>{"Commander mon plan de cuisine"}</button>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link" href="/blog">{"Blog"}</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Styles>
  )
};

export default NavigationBar;
