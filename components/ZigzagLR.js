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
  
  @media screen and (max-width: 767px)
  {
    padding: 0 15px !important;
    .container {
      margin-top: 0 !important;
      padding-top: 0 !important;
    }
    .row {
      flex-direction: column !important;
      margin-top: 0 !important;
      padding-top: 0 !important;
    }
    .text-box {
      margin-left: 0 !important;
      padding: 0 !important;
    }
    .zzimgCol {
      margin: 3em 0 0 !important;
    }    
    .feat-item {
      width: 100% !important;
    }
  }
    .part-title {
    white-space: pre;
  }
`;

const ZigzagLR = ({ title, src, subtitle, btnText, featList }) => (
  <Styles>
    <div className="container py-4">
      <div className="row align-items-center justify-content-center">
        <div className="col me-5 zz-content">
          <div className="h3 part-title">{title}</div>
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
            <div className="col zzimgCol ms-5 text-box">
              <Image src={src} alt="" layout="raw" />
            </div>
          )
        }
      </div>
    </div>
  </Styles>
);

ZigzagLR.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  src: PropTypes.object,
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
