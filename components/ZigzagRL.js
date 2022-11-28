import styled from "styled-components";
import PropTypes from "prop-types";
import Image from "next/future/image";
import circle from "../assets/images/tick-circle.svg";

const Styles = styled.div`
  .zzimgCol {
    max-height: 532px;
  }
  
  .zzimgCol img {
    max-width: 100%;
    max-height: 100%;
    height: 100%;
    object-fit: contain;
  }
  .zz-content {
    max-width: 500px;
  }
  
  .feat-item span {
    font-family: "Poppins SemiBold";
    font-size: 18px;
  }
  
    
  @media screen and (max-width: 767px)
  {
    padding: 0 15px !important;
    .row {
      flex-direction: column !important;
    }
    .text-box {
      margin-left: 0 !important;
    }
    .zzimgCol {
      margin: 0 0 2em !important;
    }   
    .feat-item {
      width: 100% !important;
    }
  }
  
  .part-title {
    white-space: pre;
  }
`;

const ZigzagRL = ({ src, title, subtitle, featList, btnText }) => (
  <Styles>
    <div className="container py-5">
      <div className="row my-5 align-items-center justify-content-center">
        { src && (
            <div className="col zzimgCol me-5">
              <Image src={src} alt=""/>
            </div>
          )
        }
        <div className="col ms-5 text-box">
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
      </div>
    </div>
  </Styles>
);

ZigzagRL.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  src: PropTypes.object,
  btnText: PropTypes.string,
  featList: PropTypes.array,
};

ZigzagRL.defaultProps = {
  src: null,
  subtitle: null,
  featList: null,
  btnText: null,
}

export default ZigzagRL;
