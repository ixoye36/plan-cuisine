import styled from "styled-components";
import DefaultLayout from "./DefaultLayout";
import thumb from "../assets/images/landsc.jpg";
import BlogCard from "./BlogCard";

const Styles = styled.div``;

const BlogLatest = () => {
  const amount = 3;
  const zone = [];

  for (let i = 0; i < amount; i++) {
    zone.push(
      <BlogCard
        key={i}
        thumbnail={thumb}
        title="Comment bien prescrire une semmelle orthopédique ?"
        description="Blog Card is a component that displays your posts on your blog page. It includes many components such as creation date and time, title, content, illustrations, article type…"
      />
    );
  }

  return (
    <Styles>
      <div className="container py-5">
        <div className="h2 mb-5">Derniers articles 📚</div>
        <div className="row row-cols-3 g-4 mb-5">{zone}</div>
      </div>
    </Styles>
  );
};

export default BlogLatest;

BlogLatest.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
