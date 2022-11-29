import styled from "styled-components";
import DefaultLayout from "./DefaultLayout";
import thumb from "../assets/images/landsc.jpg";
import BlogCard from "./BlogCard";
import PropTypes from "prop-types";
import Blog from "../pages/blog";

const Styles = styled.div``;

const BlogLatest = ({ posts }) => (
  <Styles>
    <div className="container py-5">
      <div className="h2 mb-5">Derniers articles 📚</div>
      <div className="row row-cols-3 g-4 mb-5">
        { posts.length > 0 && posts.map((index) => (
          <BlogCard
            key={index.slug}
            thumbnail={index.img}
            title={index.title}
            description={index.description}
            tags={index.tags}
          />
        ))}
      </div>
    </div>
  </Styles>
);

export default BlogLatest;

BlogLatest.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch(
    "https://deliver.kontent.ai/8cf27219-7b19-014a-f32b-07bb3772efd2/items"
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

BlogLatest.propTypes = {
  posts: PropTypes.any,
};
