import authors from "data/authors.json";
const dayjs = require("dayjs");
var utc = require("dayjs/plugin/utc");
var advancedFormat = require("dayjs/plugin/advancedFormat");
dayjs.extend(utc);
dayjs.extend(advancedFormat);

const generateRssItem = (post: any): string => {
  const xmlEncode = (str: string) => {
    if (str === undefined || str === null) {
      return "";
    }

    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");
  };

  const encodedTitle = xmlEncode(post.title);
  const encodedPath = xmlEncode(post.path);
  const encodedDescription = xmlEncode(post.description);
  const formattedDate = dayjs(post.date)
    .utcOffset(0, true)
    .startOf("day")
    .format("ddd, DD MMM YYYY HH:mm:ss [-0700]");

  return `<item>
  <guid>https://paybill.dev${encodedPath}</guid>
  <title>${encodedTitle}</title>
  <link>https://paybill.dev${encodedPath}</link>
  <description>${encodedDescription}</description>
  <pubDate>${formattedDate}</pubDate>
</item>
`;
};

// we generate a main rss.xml flie as well as individual files for
// authors who publish under the `planetpg` tag
export const generateRss = (posts: any[], authorID?: string): string => {
  const authorInfo = authors.find((item) => item.author_id === authorID);

  const formattedDate = dayjs(posts[0].date)
    .utcOffset(0, true)
    .startOf("day")
    .format("ddd, DD MMM YYYY HH:mm:ss [-0700]");

  if (authorID) {
    return `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>'Postgres | Paybill Blog</title>
      <link>https://paybill.dev/blog</link>
      <description>Latest Postgres news from ${authorInfo?.author} at Paybill</description>
      <language>en</language>
      <lastBuildDate>${formattedDate}</lastBuildDate>
      <atom:link href="https://paybill.dev/planetpg-${authorID}-rss.xml" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRssItem).join("")}
    </channel>
  </rss>
`;
  } else {
    return `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>Blog - Paybill</title>
      <link>https://paybill.dev</link>
      <description>Latest news from Paybill</description>
      <language>en</language>
      <lastBuildDate>${formattedDate}</lastBuildDate>
      <atom:link href="https://paybill.dev/rss.xml" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRssItem).join("")}
    </channel>
  </rss>
`;
  }
};
