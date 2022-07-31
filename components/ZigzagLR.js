import styled from "styled-components";
import PropTypes from "prop-types";
import Image from "next/future/image";
import circle from "../assets/images/tick-circle.svg";

const Styles = styled.div`
  
  .zzimgCol {
    max-height: 532px;
  }

  .zzimgCol img {
    max-height: 100%;
    height: 100%;
    max-width: 100%;
    object-fit: contain;
  }
  
  .zz-content {
    /* max-width: 500px; */
  }
  
  .feat-item span {
    font-family: "Poppins SemiBold";
    font-size: 18px;
  }
  
  button {
    font-family: "Poppins Regular";
    font-size: 16px;
  }
`;

const ZigzagLR = ({ title, src, subtitle, btnText, featList }) => (
  <Styles>
    <div className="container py-5">
      <div className="row my-5 align-items-center justify-content-center">
        <div className="col me-5 zz-content">
          <div className="h3">{title}</div>
          { subtitle && (<div className="subt__ my-5"><span>{subtitle}</span></div>) }
          { featList && (
            <div className="row feat-list row-cols-2 gy-3 mb-5">
              {
                featList.map((index) => (
                  <div key={index.id} className="col feat-item d-flex align-items-center">
                    <Image src={circle} alt="" className="me-3" layout="raw" />
                    <span>{index.value}</span>
                  </div>
                ))
              }
            </div>
          )
          }
          { btnText && (
            <a href="#tarifs">
              <button type="button" className="btn btn-primary px-5">
                {btnText}
              </button>
            </a>
          )
          }
        </div>
        { src && (
            <div className="col zzimgCol ms-5">
              <Image src={src} alt=""/>
            </div>
          )
        }
      </div>
    </div>
  </Styles>
);

ZigzagLR.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.is,
  src: PropTypes.string,
  btnText: PropTypes.string,
  featList: PropTypes.array,
};

ZigzagLR.defaultProps = {
  src: null,
  subtitle: null,
  btnText: null,
  featList: null,
}

export default ZigzagLR;
