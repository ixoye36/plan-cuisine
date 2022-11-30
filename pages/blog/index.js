import styled from "styled-components";
import Image from "next/image";
import DefaultLayout from "../../components/DefaultLayout";
import thumb from "../../assets/images/landsc.jpg";
import BlogCard from "../../components/BlogCard";
import PropTypes from "prop-types";

const Styles = styled.div`
  min-height: calc(100vh - var(--header-h) - var(--footer-h));
  h1 {
    font-family: 'Poppins Bold';
  }
  .hd__blog {
    position: relative;
    display: block;
    width: 100vw;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    padding-left: 0;
    padding-right: 0;
    padding-top: 3em;
  }

  .hd__content {
    background: white;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -48px;
    padding-top: 48px;
  }

  .lg__cc {
    width: 112px;
    height: 112px;
    border-radius: 50%;
    background: white;
    position: absolute;
    left: 50%;
    top: 0px;
    object-fit: cover;
    transform: translate(-50%, -50%);
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--iceberg-20);
  }

  .blog__sbtitle {
    color: var(--spacecdt-70);
    padding: 0 15px;
  }

  .lg__cc img {
    max-width: 80px;
    height: auto;
  }

  .h5 {
    font-family: "Poppins Regular";
  }
`;

const Blog = ({ posts }) => (
    <Styles>
      <div className="hd__blog">
        <div className="hd__content">
          <h1 className="py-3">{"Blog"}</h1>
          <div className="h5 blog__sbtitle">
            {"Découvrez nos derniers articles"}
          </div>
        </div>
      </div>
      <div className="blog-list">
        <div className="container py-5">
          <div className="row row-cols-3 g-4">
            { posts.length > 0 && posts.map((index) => (
              <BlogCard
                key={index.slug}
                thumbnail={index.img}
                title={index.title}
                description={index.description}
                tags={index.tags}
                slug={index.slug}
              />
            ))}
          </div>
        </div>
      </div>
    </Styles>
  );

export default Blog;

Blog.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch(
    `https://deliver.kontent.ai/8cf27219-7b19-014a-f32b-07bb3772efd2/items`
  );
  const posts = await res.json();

  const blogPosts = posts.items.map((post) => (
    {
      slug: post.system.codename.replaceAll('_', '-'),
      title: post.elements.title.value,
      description: post.elements.meta_description.value,
      img: post.elements.main_image.value[0].url,
      tags: post.elements.category.value,
    }
  ));
  console.log(blogPosts);
  return { props: { posts : blogPosts } };
}

Blog.propTypes = {
  posts: PropTypes.any,
};