module.exports = [
  {
    source: "/:path*",
    destination: `/:path*`,
  },
  {
    source: "/feed.xml",
    destination: `/rss.xml`,
  },
];
