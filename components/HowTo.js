import styled from "styled-components";
import HowToStep from "./HowToStep";
import ArrowC from '../assets/images/arrow-circle.svg';
import Image from "next/future/image";

const Styles = styled.div`
  background-color: var(--dsg-100);
  border-radius: 20px;
  h2 {
    color: white;
  }
  .arrow-circle {
    transform: rotate(180deg);
  }
  .subtitle {
    font-family: "Poppins Regular";
    font-size: 14px;
    color: white;
    opacity: .7;
  }
`

const HowTo = () => (
  <Styles className="container p-5">
    <h2>Comment ça marche ?</h2>
    <div className="subtitle"><span>{"Votre plan de cuisine complet et de l'enseigne de votre choix en 3 étapes simples"}</span></div>
    <div className="d-flex align-items-center justify-content-between my-5 px-5">
      <HowToStep
        number={1}
        title="Commande"
        subtitle="Je choisis l'offre en fonction de mon besoin et je passe commande"
      />
      <Image src={ArrowC} alt="" className="arrow-circle" layout="raw" />
      <HowToStep
        number={2}
        title="Questionnaire"
        subtitle="Je remplis un questionnaire pour identifier mon besoin, mes goûts"
      />
      <Image src={ArrowC} alt="" className="arrow-circle" layout="raw" />
      <HowToStep
        number={3}
        title="Livraison"
        subtitle="Je reçois mon plan une fois que celui-ci est prêt"
      />
    </div>
  </Styles>
)

export default HowTo;