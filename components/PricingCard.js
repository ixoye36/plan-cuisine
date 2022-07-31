import styled from "styled-components";
import PropTypes from "prop-types";
import Image from "next/image";
import { useEffect, useState } from "react";
import checkmark from "../assets/images/icons/checkmark-fat.svg";

const Styles = styled.div`
  .card {
    background-color: var(--bdazzledb-10);
    border: none;
    border-radius: 10px;
    max-width: 358px;
  }

  .card.Simple {
    background-color: var(--dsg-100);
  }

  .card.Inspiration {
    background-color: var(--yellowo-20);
  }

  .card.Simple .price-tag {
    color: white;
  }

  .card.Inspiration .price-tag {
    color: var(--dsg-100);
  }

  .price-tag {
    font-family: "Poppins Bold";
    font-size: 48px;
    line-height: 72px;
    max-width: fit-content;
    min-width: fit-content;
  }

  .plan-label {
    color: white;
    font-family: "Poppins SemiBold";
    font-size: 18px;
    line-height: 24px;
    max-width: fit-content;
  }

  .plan-desc {
    font-family: "Poppins Regular";
    font-size: 14px;
    line-height: 21px;
    max-width: fit-content;
    color: white;
    min-height: 2em;
  }
  
  .Inspiration .plan-label,
  .Inspiration .plan-desc {
    color: var(--dsg-100);
  }
  
  .feat-img {
    filter: invert(100%) sepia(94%) saturate(0%) hue-rotate(214deg) brightness(107%) contrast(106%);
  }
  
  .Inspiration .feat-img {
    filter: invert(32%) sepia(21%) saturate(873%) hue-rotate(104deg) brightness(93%) contrast(86%);
  }

  .plan-desc {
    font-family: "Poppins Regular";
    font-size: 14px;
    line-height: 21px;
    max-width: fit-content;
    color: white;
    min-height: 2em;
  }

  hr {
    margin-right: -24px;
    color: 000;
    opacity: 0.08;
  }

  #custom-range::-webkit-slider-thumb {
    background: var(--amazon-100);
  }
  #custom-range::-moz-range-thumb {
    background: var(--amazon-100);
  }
  #custom-range::-ms-thumb {
    background: var(--amazon-100);
  }
`;

const PricingCard = ({
  price,
  plan,
  btnTxt,
  features,
  text,
  paymentLink,
}) => {
  const feats = [];
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  features.forEach((i, idx, array) => {
    feats.push(
      <div className={`row${idx === array.length - 1 ? "" : " mb-3"}`}>
        <Image className="col-1 feat-img" src={checkmark} alt="" />
        <div className="col feat-img">{i}</div>
      </div>
    );
  });

  return (
    <Styles>
      <div className={`card py-4 px-4 text-start ${plan}`}>
        <div className="row justify-content-start align-items-center">
          <span className="col-5 price-tag pe-0">{price}€</span>
        </div>
        <div className="plan-label">{plan}</div>
        <div className="plan-desc mt-1 mb-1 ">
          {text}
        </div>
        <hr />
        <div className="container plan-features ps-2 mb-5">{feats}</div>
        <button
          type="submit"
          role="link"
          className="w-100 mx-auto mt-auto btn btn-white"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = paymentLink;
          }}
        >
          {btnTxt}
        </button>
      </div>
    </Styles>
  );
};

export default PricingCard;

PricingCard.propTypes = {
  plan: PropTypes.string,
  price: PropTypes.number,
  text: PropTypes.string,
  btnTxt: PropTypes.string,
  features: PropTypes.array,
  paymentLink: PropTypes.string,
};
