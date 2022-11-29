import styled from "styled-components";
import Image from "next/image";
import heroImg from "../assets/images/home_herob.png";
import HeroImg from "./HeroImg";
import HeroList from "./HeroList";

const Styles = styled.div`
  
  .hero__img {
    width: 100%;
  }
  
  .hero-bottom {
    position: relative;
  }
  
  .hero.jumbotron {
    background-color: var(--dsg-100);
    position: relative;
  }
  
  .custom-shape-divider-top-1659185623 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    }
    
    .custom-shape-divider-top-1659185623 svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 320px;
    }
    
    .custom-shape-divider-top-1659185623 .shape-fill {
        fill: var(--dsg-100);
    }
    
    h1 {
      font-family: "Poppins Bold";
      font-size: 60px;
      line-height: 84px;
      color: white;
      max-width: 490px;
    }
    
    .hero__sub {
      max-width: 500px;
      font-family: "Poppins SemiBold";
      white-space: pre;
    }
    
    h1 > span {
      color: var(--yellowo-100);
    }
    
    button {
      font-family: "Poppins SemiBold"
    }
    
    @media screen and (max-width: 767px)
    {
      .hero__img {
        display: none !important;
      }
    }
    
    .store-list {
      font-family: "Poppins Medium";
      font-size: 16px;
      color: white;
    }
`;

const HeroSection = () => (
    <Styles>
      <div className="hero jumbotron">
        <div className="container pt-5">
          <div className="row align-items-start">
            <div className="col">
              <div className="vstack gap-3">
                <h1>Mon plan cuisine pour seulement <span>29€</span></h1>
                <div className="store-list">
                  <span>IKEA • Leroy Merlin • Brico Dépôt • BUT</span>
                </div>
                <div className="hero__sub text-white pt-3 pb-4 h3">
                  <span className="d-block mb-3">{`Fini la file d'attente en magasin ! 🕓 😩\n`}</span>
                  <span>{`Donnez-nous vos mesures, couleurs, budget\net on se charge du reste !`}</span>
                </div>
                <a href="#tarifs">
                  <button
                    type="button"
                    className="btn btn-primary w-50 hero__cta"
                  >
                    {"C'est parti !"}
                  </button>
                </a>
              </div>
            </div>
            <div className="col hero__img">
              <HeroImg />
            </div>
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <div className="custom-shape-divider-top-1659185623">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
               preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
          </svg>
        </div>
        <div className="hero jumbotron bg-transparent">
          <div className="container pt-5">
            <HeroList />
          </div>
        </div>
      </div>
    </Styles>
  );

export default HeroSection;
