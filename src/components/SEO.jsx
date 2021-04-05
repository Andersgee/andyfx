import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";

const SEO = ({ title, description, image, article, lang }) => {
  const { pathname } = useLocation();
  //pathname will be "/" for root

  const siteUrl = "https://www.andyfx.net";
  const defaultTitle = "andyfx";
  const defaultDescription = "andyfx";

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}/images/${image || "logo/andyfx.png"}`,
    url: `${siteUrl}${pathname}`,
  };

  const ogtitle = title ? `${seo.title} | ${defaultTitle}` : defaultTitle;

  console.log("seo: ", seo);

  return (
    <Helmet
      title={ogtitle}
      htmlAttributes={{
        lang,
      }}
    >
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta charset="UTF-8" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <link rel="icon" type="image/png" href="favicon.png" />

      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={ogtitle} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      {article && <meta property="og:type" content="article" />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogtitle} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
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
