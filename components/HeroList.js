import styled from "styled-components";

const Styles = styled.div`
  @media screen and (min-width: 768px)
  {
    width: 50%;
  }
   @media screen and (max-width: 767px)
  {
    width: 100%;
    
    .jumb-info {
      margin-top: 2em;
      align-self: start !important;
      margin-right: auto !important;
    }
    .info-list {
      flex-direction: column;
      height: fit-content !important;
      margin-top: 5em;
    }
  }
  .row {
    height: 200px;
   }
  .amount {
    font-family: "Poppins Bold";
    font-size: 36px;
    line-height: 57px;
    color: var(--yellowo-100);
  }
  
  .desc {
    color: var(--chineseb-40);
    font-size: 18px;
    line-height: 34px;
    font-family: "Poppins Regular";
  }
  
  . jumb-info {
    width: 150px;
  }
  
    @media screen and (max-width: 767px)
  {

  }
`;

const HeroList = () => (
  <Styles>
    <div className="container pt-5">
      <div className="row info-list">
        <div className="col align-self-start me-5 jumb-info">
          <div className="vstack gap-3">
            <span className="amount">2000+</span>
            <span className="desc">Plans de cuisine crées</span>
          </div>
        </div>
        <div className="col align-self-center me-5 jumb-info">
          <div className="vstack gap-3">
            <span className="amount">10+</span>
            <span className="desc">{"années d'expérience"}</span>
          </div>
        </div>
        <div className="col align-self-end jumb-info">
          <div className="vstack gap-3">
            <span className="amount">20+</span>
            <span className="desc">Plans en cours</span>
          </div>
        </div>
      </div>
    </div>
  </Styles>
);

export default HeroList;
