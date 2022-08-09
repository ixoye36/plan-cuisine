import styled from "styled-components";
import Image from "next/future/image";
import Img1 from "../assets/images/hero-img-1.jpg";
import Img2 from "../assets/images/hero-img-3.jpg";
import Img3 from "../assets/images/hero-img-2.jpg";

const Styles = styled.div`
  position: absolute;
  top: 5rem;
  right: 0;
  width: 50%;
  max-width: 712px;
  min-height: 588px;
  z-index: 1;
  
  .main-img {
    width: 100%;
    height: 588px;
  }
  
  .main-img img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  
  .small-img {
    width: 100%;
    height: 200px;
  }
  
  @media screen and (max-width: 767px)
  {
    .hero__img {
      display: none !important;
    }
  }
`;

const HeroImg = () => (
  <Styles>
    <div className="vstack gap-3">
      <div className="main-img">
        <Image src={Img1} alt="" layout="raw" />
      </div>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <Image className="small-img" src={Img2} alt="" layout="raw" />
        </div>
        <div className="col-lg-6">
          <Image className="small-img" src={Img3} alt="" layout="raw" />
        </div>
      </div>
    </div>
  </Styles>
);

export default HeroImg;
