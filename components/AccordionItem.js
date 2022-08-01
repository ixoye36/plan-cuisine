import styled from "styled-components";
import PropTypes from "prop-types";

const Styles = styled.div`
  .zzimgCol img {
    max-width: 100%;
  }
  
  .accordion-button:not(.collapsed) {
    background-color: var(--dsg-20);
  }
  
  .accordion-button {
    font-size: 16px;
    line-height: 22px;
    color: var(--dsg-100);
    font-family: "Poppins Medium";
  }

  .list-feat {
    color: var(--chineseb-70);
  }

  .accordion-item {
    border-radius: 10px;
    border: 1px solid var(--dsg-20) !important;
    overflow: hidden;
  }

  .accordion-item button {
    box-shadow: none;
  }
  
  .accordion-body {
    color: var(--chineseb-100);
  }
`;

const AccordionItem = ({ occurrence, collapse, parentId, header, body }) => (
  <Styles>
    <div className="accordion-item mb-3">
      <h2 className="accordion-header" id={`heading${occurrence}`}>
        <button
          className={`accordion-button${collapse ? " collapsed" : ""}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${occurrence}`}
          aria-expanded={!collapse}
          aria-controls={`collapse${occurrence}`}
        >
          {header}
        </button>
      </h2>
      <div
        id={`collapse${occurrence}`}
        className={`accordion-collapse collapse${collapse ? " collapse" : ""}`}
        aria-labelledby={`heading${occurrence}`}
        data-bs-parent={parentId}
      >
        <div className="accordion-body text-start">{body}</div>
      </div>
    </div>
  </Styles>
);

export default AccordionItem;

AccordionItem.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  occurrence: PropTypes.string.isRequired,
  collapse: PropTypes.bool.isRequired,
  parentId: PropTypes.string.isRequired,
};
