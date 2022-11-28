import styled from "styled-components";
import Image from "next/image";
import PropTypes from "prop-types";
import DefaultLayout from "../../components/DefaultLayout";
import test from "../../assets/images/test.jpeg";

const Styles = styled.div`
  background: var(--culture-100);

  .post-head {
    height: calc(100vh - var(--header-h));
    max-height: calc(100vh - var(--header-h));
  }

  .post-main-img {
    position: relative;
    min-height: 50%;
    height: 100%;
  }

  .post-main-img img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 50% 0 50% 50%;
  }

  .post-subtitle {
    color: var(--spacecdt-50);
  }

  .post-stamp {
    color: var(--bdazzledb-70);
  }

  .post-content p,
  .post-intro {
    color: var(--spacecdt-70);
  }

  .post-content h2 {
    color: var(--spacecdt-100);
    margin: 2em 0 1em;
  }
`;

const Post = ({ post }) => (
  <Styles>
    <div className="container-fluid mb-5">
      <div className="row justify-content-between align-items-center post-head">
        <div className="container col-4">
          <div className="post-stamp h6 mb-4">
            10 jan 2022 • 10 min de lecture
          </div>
          <h1 className="post-title mb-4">
            {post.item.elements.article_title.value}
          </h1>
          <div className="post-subtitle">
            {post.item.elements.seo_description.value}
          </div>
        </div>
        <div className="post-main-img col-6">
          <Image src={test} layout="fill" alt="" />
        </div>
      </div>
    </div>
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-8">
          <div
            className="post-intro mb-5"
            dangerouslySetInnerHTML={{
              __html: post.item.elements.article_introduction.value,
            }}
          />
          <div
            className="post-content"
            dangerouslySetInnerHTML={{
              __html: post.item.elements.article_content.value,
            }}
          />
        </div>
      </div>
    </div>
  </Styles>
);

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(
    "https://04gbgmyy00.execute-api.eu-west-3.amazonaws.com/prod/v1/kontents?type=tutorial"
  );
  const posts = await res.json();
  console.log(posts.items);

  // Get the paths we want to pre-render based on posts
  const paths = posts.items.map((post) => ({
    // dynamic data
    params: {
      slug: post.doc.item.system.codename,
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://04gbgmyy00.execute-api.eu-west-3.amazonaws.com/prod/v1/kontents/${params.slug}`
  );
  const post = await res.json();

  // Pass post data to the page via props
  return { props: { post } };
}

Post.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Post;

Post.propTypes = {
  post: PropTypes.any,
};
