/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://ai.caspianthesis.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [],
  },
  exclude: ["/api/*"],
};
