import styled from "styled-components";
import Image from "next/image";
import DefaultLayout from "../../components/DefaultLayout";
import thumb from "../../assets/images/landsc.jpg";
import BlogCard from "../../components/BlogCard";

const Styles = styled.div`
  min-height: calc(100vh - var(--header-h) - var(--footer-h));

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
    background: var(--culture-100);
    padding-top: 160px;
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

const Blog = () => {
  const amount = 8;
  const zone = [];
  let i;

  for (i = 0; i < amount; i++) {
    zone.push(
      <BlogCard
        thumbnail={thumb}
        title="Comment bien prescrire une semmelle orthopédique ?"
        description="Blog Card is a component that displays your posts on your blog page. It includes many components such as creation date and time, title, content, illustrations, article type…"
      />
    );
  }

  return (
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
          <div className="row row-cols-3 g-4">{zone}</div>
        </div>
      </div>
    </Styles>
  );
};

export default Blog;

Blog.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};