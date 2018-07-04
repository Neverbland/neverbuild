import NextHead from 'next/head';
import { black } from '../utils/styling/colors';

const defaultTitle = 'Neverbland';
const defaultDescription = 'Kickstart Neverbland front-end projects';
const defaultOGURL = 'https://www.example.com';
const defaultOGImage = 'https://example.com/static/open-graph.png';

const Head = ({
  title, description, url, ogImage
}) => (
  <NextHead>
    {/* https://css-tricks.com/essential-meta-tags-social-media/ */}
    <meta charSet="UTF-8" />
    <title>
      {title
        ? `${title} | ${defaultTitle}`
        : `${defaultTitle} | ${defaultDescription}`}
    </title>
    <meta
      name="description"
      content={description || defaultDescription}
    />
    <meta
      name="theme-color"
      content={black}
    />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <link
      rel="icon"
      href="/static/favicon.ico"
    />
    <meta
      property="og:url"
      content={url || defaultOGURL}
    />
    <meta
      property="og:title"
      content={title || defaultTitle}
    />
    <meta
      property="og:description"
      content={description || defaultDescription}
    />
    <meta
      name="twitter:site"
      content={url || defaultOGURL}
    />
    <meta
      name="twitter:card"
      content="summary_large_image"
    />
    <meta
      name="twitter:image"
      content={ogImage || defaultOGImage}
    />
    <meta
      property="og:image"
      content={ogImage || defaultOGImage}
    />
    <meta
      property="og:image:width"
      content="1200"
    />
    <meta
      property="og:image:height"
      content="630"
    />
    {/* Add additional icons here */}
    {/* <link
      rel="icon"
      sizes="192x192"
      href="/static/favicons/touch-icon.png"
    />
    <link
      rel="apple-touch-icon"
      href="/static/favicons/touch-icon.png"
    /> */}
  </NextHead>
);

export default Head;
