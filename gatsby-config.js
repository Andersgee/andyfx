require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`${process.env.GTAG_MEASUREMENTID}`],
        gtagConfig: {
          anonymize_ip: true,
          cookie_flags: "SameSite=None;Secure",
          cookie_domain: "www.andyfx.net",
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false, // script in the head instead of body
          respectDNT: true,
          exclude: ["/preview/**", "/do-not-track/me/too/"], // Avoids sending pageview hits from custom paths
        },
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@assets": "src/assets",
          "@components": "src/components",
          "@hooks": "src/hooks",
          "@js": "src/js",
          "@pages": "src/pages",
          "@templates": "src/templates",
          "@styles": "src/styles",
        },
        extensions: ["js", "jsx", "scss"],
      },
    },
  ],
};
