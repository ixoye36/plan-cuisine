import styled from "styled-components";
import DefaultLayout from "../components/DefaultLayout";
import Head from "next/head";

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
      <Head>
          <title>Mentions légales</title>
      </Head>
    <div className="container my-5 pb-5">
        <h1>Mentions l&eacute;gales et politique de confidentialit&eacute;</h1>
        <h3 className="mt-5">Éditeur</h3>
        <p>Le site <a href="https://cuisineplan.fr/">cuisineplan.fr</a> est &eacute;dit&eacute; par <strong>MT36 Holding</strong>, Soci&eacute;t&eacute; par Actions Simplifi&eacute;e dont le si&egrave;ge social est situ&eacute; au
            59, rue de Ponthieu, 75008 Paris.&nbsp;</p>
        <p><br /></p>
        <p>Adresse e-mail: support@cuisineplan.fr</p>
        <p><br /></p>
        <h4>Directeur de la Publication</h4>
        <p>Directeur de la Publication&nbsp;: Peniel MATETA</p>
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
