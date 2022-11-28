import React, { useState } from "react";
import styled from "styled-components";
import PricingCard from "./PricingCard";

const Styles = styled.div`
  background-color: white;
  .pr-type-left {
    flex: 1;
    text-align: end;
  }
  .pr-type-right {
    flex: 1;
    text-align: start;
  }

  .saving_year {
    color: var(--amazon-100);
    position: relative;
  }

  .saving_year:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    height: 7px;
    width: 100%;
    border: solid 2px var(--amazon-100);
    border-color: var(--amazon-100) transparent transparent transparent;
    border-radius: 50%;
  }
  
    
  @media screen and (max-width: 767px)
  {
    .row.card-row {
      flex-direction: column !important;
    }
    .price-item {
      width: 100% !important;
      margin: 0 auto 2em;
    }
    
    .price-item .card  {
      width: 100% !important;
      max-width: 100% !important;
    }
    
  }
`;

const PricingPlans = () => {
  const [monthly, setMonthly] = useState(true);
  return (
    <Styles>
      <div className="container text-center">
        <div className="row justify-content-center py-5 card-row">
          <div className="col-4 position-relative price-item">
            <PricingCard
              plan="Simple"
              price={29}
              text="Vous souhaitez un plan de cuisine simple de l'enseigne de votre choix"
              btnType="primary"
              btnTxt="Commander"
              features={[
                "1 proposition de plan",
                "1 revue",
                "1 devis du magasin de votre choix parmi Leroy Merlin, IKEA, Brico Dépôt ou encore BUT",
              ]}
              paymentLink={process.env.NEXT_PUBLIC_OFFER_SIMPLE_URL}
            />
          </div>
          <div className="col-4 position-relative price-item">
            <PricingCard
              plan="Inspiration"
              price={59}
              priceM={10}
              text="Vous souhaitez différentes inspirations et tarifs de plusieurs enseignes"
              btnType="outline-primary"
              btnTxt="Commander"
              features={[
                "3 propositions de plan",
                "3 revues possibles",
                "3 devis des enseignes de votre choix parmi Leroy Merlin, IKEA, Brico Dépôt ou encore BUT",
              ]}
              paymentLink={process.env.NEXT_PUBLIC_OFFER_INSPIRATION_URL}
              popularTag={true}
            />
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default PricingPlans;
