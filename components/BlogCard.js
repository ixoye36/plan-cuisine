import styled from "styled-components";
import PropTypes from "prop-types";
import Image from "next/future/image";
import BlogTag from "./BlogTag";

const Styles = styled.div`
  .blog-card {
    display: block;
    max-width: 100%;
    text-decoration: none;
  }

  .blog-card:hover h2 {
    transition: 0.5s;
  }

  .blog-card .card {
    /*max-width: 350px;*/
    border-radius: 10px !important;
    overflow: hidden;
  }

  .article-thumb {
    width: 100%;
    height: 250px;
  }

  .article-thumb img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  
  .article-title, .article-desc {
    color: var(--chineseb-100);
  }

`;

const BlogCard = ({ title, alt, description, thumbnail, tags, slug }) => {
  return (
    <Styles>
      <a href={`/blog/${slug}`} className="blog-card">
        <div className="d-flex flex-column">
          <div className="article-thumb mb-3">
            <Image src={thumbnail} alt={alt} width="300" height="300" layout="fill" />
          </div>
          <div className="article-b">
            <div className="hstack gap-3 tags pb-3">
              { tags.length > 0 && tags.map((index) => (
                <BlogTag key={index.codename} label={index.name} url={index.codename} />
              ))}
            </div>
            <h5 className="article-title">{title}</h5>
            <div className="article-desc pt-3">{description}</div>
          </div>
        </div>
      </a>
    </Styles>
  );
};

export default BlogCard;

BlogCard.propTypes = {
  thumbnail: PropTypes.shape({ src: PropTypes.string }),
  alt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  slug: PropTypes.string,
};

BlogTag.propTypes = {
  label: PropTypes.string,
  url: PropTypes.string,
};
