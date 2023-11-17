import React from "react";
import "../CSS/PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="pnbody">
      <h1 className="h1">404 Error Page </h1>
      <p class="zoom-area">
        You’re either misspelling the URL <br /> or requesting a page that's no
        longer here.{" "}
      </p>
      <section class="error-container">
        <span class="four">
          <span class="screen-reader-text">4</span>
        </span>
        <span class="zero">
          <span class="screen-reader-text">0</span>
        </span>
        <span class="four">
          <span class="screen-reader-text">4</span>
        </span>
      </section>
      <div class="link-container">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.silocreativo.com/en/creative-examples-404-error-css/"
          class="more-link"
        >
          Visit the original article
        </a>
      </div>
    </div>
  );
};

export default PageNotFound;
