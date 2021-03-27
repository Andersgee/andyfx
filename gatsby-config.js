module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "260455500", //andyfx propertyid
        ],
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false, // Puts tracking script in the head instead of the body
          respectDNT: true, // Optional
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
        extensions: ["js", "jsx", "sass", "scss"],
      },
    },
  ],
};
