import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";

const SEO = ({ title, description, image, article, lang }) => {
  const { pathname } = useLocation();

  const siteUrl = "https://www.andyfx.net";
  const defaultTitle = "andyfx";
  const defaultDescription = "andyfx";
  const titleTemplate = "%s | andyfx";

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}/images/${image || "logo/andyfx.png"}`,
    url: `${siteUrl}/${pathname}`,
  };

  const ogtitle = title ? `${seo.title} | ${defaultTitle}` : defaultTitle;

  return (
    <Helmet
      titleTemplate={title ? titleTemplate : null}
      title={seo.title}
      htmlAttributes={{
        lang,
      }}
    >
      <meta charset="UTF-8" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <link rel="icon" type="image/png" href="/images/logo/andyfx.png" />

      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      <meta property="og:title" content={ogtitle} />
      <meta property="og:description" content={seo.description} />
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogtitle} />
      <meta name="twitter:description" content={seo.description} />
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  lang: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
  lang: "en",
};
