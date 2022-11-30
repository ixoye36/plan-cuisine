import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "next/link";

const Styles = styled.div`
  background-color: var(--vvt-100);
  border-radius: 5px;
  padding: 5px 10px;
  width: fit-content;
  .tag-element {
    color: var(--chineseb-100);
  }
`;

const BlogTag = ({ url, label }) => (
  <Styles>
    <Link href={`/category/${url}`}>
      <div className="tag-element">{label}</div>
    </Link>
  </Styles>
);

export default BlogTag;

BlogTag.propTypes = {
  label: PropTypes.string,
  url: PropTypes.string,
};
