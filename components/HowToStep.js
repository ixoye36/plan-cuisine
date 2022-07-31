import styled from "styled-components";
import PropTypes from "prop-types";

const Styles = styled.div`
  
  max-width: 250px;

  .step-number {
    font-family: "Poppins Bold";
    font-size: 90px;
    line-height: 90px;
    color: var(--yellowo-100);
  }
  
  .step-title {
    font-family: "Poppins SemiBold";
    font-size: 30px;
    color: white;
  }
  
  .step-subtitle {
    font-family: "Poppins Regular";
    font-size: 14px;
    color: white;
    opacity: .7;
  }
  
  hr {
    border: 2px solid var(--yellowo-100);
  }
`

const HowToStep = ({ number, title, subtitle }) => (
  <Styles>
    <div className="step vstack gap-3">
      <div className="step-number">{number}</div>
      <div className="step-title"><span>{title}</span></div>
      <hr className="my-0 ms-1 w-25" />
      <div className="step-subtitle"><span>{subtitle}</span></div>
    </div>
  </Styles>
)

HowToStep.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default HowToStep;