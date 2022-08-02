import styled from "styled-components";
import AccordionItem from "./AccordionItem";

const Styles = styled.div`
  .zzimgCol img {
    max-width: 100%;
  }

  .list-feat {
    color: var(--spacecdt-50);
  }
`;

const FeatureAccordion = () => (
    <Styles>
      <div className="accordion accordion-flush" id="accordion-feature">
        <AccordionItem
          header="Qu'est-ce que je reçois à reception de la commande ?"
          body="Vous recevrez exactement la même chose que ce que vous obtenez en magasin : un plan 2d et 3d de votre cuisine, le détails des meubles et accessoires ainsi que le budget total de la cuisine."
          occurrence="1"
          collapse={true}
          parentId="accordion-feature"
        />
        <AccordionItem
          header="Quelles enseignes sont disponibles dans les offres ?"
          body="Nous proposons, aujourd'hui, des plans de cuisine des enseignes suivantes : Leroy Merlin, IKEA, Brico Dépôt et BUT"
          occurrence="2"
          collapse={true}
          parentId="accordion-feature"
        />
        <AccordionItem
          header="Quelles informations vous faut-il pour réaliser le plan ?"
          body="Outre vos goûts et préférences en couleurs, disposition ou budget, nous aurons surtout besoin d'un plan de votre pièce avec toutes les dimensions. Le plan peut être une photo ou un vrai plan d'architecte s'il s'agit d'un futur logement neuf."
          occurrence="3"
          collapse={true}
          parentId="accordion-feature"
        />
        <AccordionItem
          header="Quels sont les délais de livraison d'un plan ?"
          body="A partir du moment où vous soumettez le questionnaire, comptez 5 jours de délai pour l'offre Simple et 7 jours pour l'offre Inspiration."
          occurrence="4"
          collapse={true}
          parentId="accordion-feature"
        />
        <AccordionItem
          header="Puis-je demander des modifications si le résultat ne me plait pas ?"
          body="En fonction de l'offre choisie, vous pourrez demander jusqu'à 3 rectifications. Il est ainsi primordial de bien renseigner le plan de votre pièce."
          occurrence="5"
          collapse={true}
          parentId="accordion-feature"
        />
      </div>
    </Styles>
  );

export default FeatureAccordion;
