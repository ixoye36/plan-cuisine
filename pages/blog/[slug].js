import styled from "styled-components";
import Image from "next/future/image";
import PropTypes from "prop-types";
import DefaultLayout from "../../components/DefaultLayout";

const Styles = styled.div`
  background: var(--culture-100);

  .post-head {
    position: relative;
    height: fit-content;
    max-height: fit-content;
  }

  .post-main-img {
    position: relative;
    min-height: 50%;
    height: 100%;
  }

  .post-main-img img {
    object-fit: cover;
    border-radius: 20px;
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
  
  .post-title {
    font-family: 'Poppins SemiBold';
  }
  
  .colorBlock {
    width: 100%;  
    position: absolute;
    top: 0;
    height: 500px;
    background-color: var(--dsg-100);
    z-index: 1;
  }
  
  .z-1 {
    z-index: 1;
  }
  
  .category-flag {
    color: var(--vvt-100);
    text-decoration: none;
    border: 1px solid var(--vvt-100);
    padding: 5px 15px;
    border-radius: 18px;
  }
  
  .category-flag:hover {
    color: var(--djg-100);
    background-color: var(--vvt-100);
    border: 1px solid var(--vvt-100);
  }
  
`;

const Post = ({ post }) => (
  <Styles>
    <div className="container-fluid mb-5 px-0">
      <div className="post-head pt-5">
        <div className="colorBlock" />
        <div className="vstack gap-2 w-50 text-center mx-auto bg-transparent z-1">
          <div className="category-flags hstack gap-3 justify-content-center z-1 mb-3">
          { post.item.elements.category.value.length > 0 && post.item.elements.category.value.map((item) => (
            <a key={item.codename} className="category-flag" href="#">{item.name}</a>
          ))}
          </div>
          <h1 className="post-title mb-4 z-1 text-white">
            {post.item.elements.title.value}
          </h1>
          <div className="post-subtitle z-1 text-white mb-5">
            {post.item.elements.subtitle.value}
          </div>
        </div>
        <div className="post-main-img mx-auto z-1 text-center">
          <Image src={post.item.elements.main_image.value[0].url} raw width="996" height="610" alt="" />
        </div>
      </div>
    </div>
    <div className="container pt-3 mt-5 pb-5">
      <div className="row justify-content-center">
        <div className="col-8">
          <div
            className="post-intro mb-5"
            dangerouslySetInnerHTML={{
              __html: post.item.elements.intro.value,
            }}
          />
          <div
            className="post-content"
            dangerouslySetInnerHTML={{
              __html: post.item.elements.content.value,
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
    "https://deliver.kontent.ai/8cf27219-7b19-014a-f32b-07bb3772efd2/items"
  );
  const posts = await res.json();
  // console.log(posts.items);

  // Get the paths we want to pre-render based on posts
  const paths = posts.items.map((post) => ({
    // dynamic data
    params: {
      slug: post.system.codename.replaceAll('_', '-'),
    },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const slugFixed = params.slug.replaceAll('-', '_');
  const res = await fetch(
    `https://deliver.kontent.ai/8cf27219-7b19-014a-f32b-07bb3772efd2/items/${slugFixed}`
  );
  const post = await res.json();
  console.log(post);
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
