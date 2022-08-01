import styled from "styled-components";
import ZigzagRL from "./ZigzagRL";
import BluePrint from '../assets/images/kitchen-blueprint.jpg';
import KitchenImg from '../assets/images/kitchen-img-2.jpg';
import ZigzagLR from "./ZigzagLR";

const Styles = styled.div`

  .zzimgCol {
    max-height: 532px;
  }

  .zzimgCol img {
    max-width: 100%;
  }
  
  .h3 {
    color: var(--chineseb-100);
    font-family: "Poppins Bold";
    font-size: 54px;
    line-height: 70px;
    max-width: 500px;
  }
  
  .subt__ {
    font-family: "Poppins Regular";
    font-size: 18px;
    line-height: 32px;
    color: var(--chineseb-40);
    max-width: 500px;
  }
  
`;

const FeaturesSection = () => (
  <Styles className="mt-5 pt-5">
    <ZigzagRL
      title="Votre plan cuisine sans effort"
      src={BluePrint}
      subtitle="Designer une cuisine est chronophage, surtout lorsque l'on souhaite comparer les prix des différentes enseignes. Il faut en plus apprendre à utiliser leurs logiciels 3d ! On vous propose donc :"
      featList={
        [
          {
            id: 1,
            value: "Un plan 2d et 3d",
          },
          {
            id: 2,
            value: "Livré en 5 jours",
          },
        ]
      }
      btnText="Commander un plan"
    />
    <ZigzagLR
      title="On s'occupe de tout"
      src={KitchenImg}
      subtitle="Une fois toutes les informations recueillis via un formulaire rapide, nous nous chargeons de réaliser un plan de votre future cuisine fidèle aux dimensions fournies. Voici les informations minimales dont nous avons besoin :"
      featList={
        [
          {
            id: 1,
            value: "Plan avec dimensions",
          },
          {
            id: 2,
            value: "Couleurs souhaitées",
          },
          {
            id: 3,
            value: "Budget",
          },
          {
            id: 4,
            value: "Enseigne(s) souhaitée(s)",
          },
        ]
      }
      btnText="Commander un plan"
    />
  </Styles>
);

export default FeaturesSection;
