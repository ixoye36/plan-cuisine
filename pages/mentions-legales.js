import styled from "styled-components";
import DefaultLayout from "../components/DefaultLayout";

const Styles = styled.div`
    max-width: 50%;
    h1 {
        font-family: "Poppins SemiBold";
    }
    h2 {
        font-family: "Poppins SemiBold";
        margin-top: 2em;
        margin-bottom: 1em;
    }
    p {
        font-family: "Poppins Regular"
    }
`

const MentionsLegales = () => (
  <Styles className="mx-auto">
    <div className="container my-5 pb-5">
        <h1>Mentions l&eacute;gales et politique de confidentialit&eacute;</h1>
        <h3 className="mt-5">Éditeur</h3>
        <p>Le site <a href="https://cuisineplan.fr/">cuisineplan.fr</a> est &eacute;dit&eacute; par <strong>MT Investissements</strong>, Soci&eacute;t&eacute; par Actions Simplifi&eacute;e au capital de 2000 euros, dont le si&egrave;ge social est situ&eacute; au 122 rue Amelot, 75011 Paris.&nbsp;</p>
        <p><br /></p>
        <p>Adresse e-mail: cuisineplanfr@gmail.com</p>
        <p><br /></p>
        <h4>Directeur de la Publication</h4>
        <p>Directeur de la Publication&nbsp;: Monsieur Peniel Mateta</p>
        <p><br /></p>
        <h4>H&eacute;bergeur</h4>
        <p>Le site est h&eacute;berg&eacute; par <strong>Netlify, Inc.</strong>, 44 Montgomery Street, Suite 300, San Francisco, California 94104</p>
        <p>Email: support@netlify.com</p>
    </div>
  </Styles>
)

MentionsLegales.getLayout = function getLayout(page) {
    return <DefaultLayout>{page}</DefaultLayout>;
};

export default MentionsLegales;
