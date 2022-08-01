import styled from "styled-components";

const Styles = styled.div`
  width: 50%;
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
`;

const HeroList = () => (
  <Styles>
    <div className="container pt-5">
      <div className="row">
        <div className="col align-self-start me-5 jumb-info">
          <div className="vstack gap-3">
            <span className="amount">2000+</span>
            <span className="desc">Plans de cuisine crées</span>
          </div>
        </div>
        <div className="col align-self-center me-5">
          <div className="vstack gap-3">
            <span className="amount">10+</span>
            <span className="desc">années d'expérience</span>
          </div>
        </div>
        <div className="col align-self-end">
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
