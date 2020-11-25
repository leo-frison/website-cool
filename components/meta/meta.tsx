import Head from 'next/head';
import { IMeta } from '../../types';

const Meta = (props: IMeta) => {
  const orgName = 'MyCompany';
  const siteName = 'junekim.xyz';
  const homeUrl = process.env.PUBLIC_URL || 'https://landing.junekim.xyz';
  const {
    image = `${homeUrl}/assets/logo.png`,
    imageWidth = '1200',
    imageHeight = '627',
  } = props;

  return (
    <Head>
      <title>{props.title}</title>
      <link rel="canonical" href={props.url} />
      <meta name="robots" content="index, follow" />
      <meta name="description" content={props.desc} />
      <meta name="author" content={orgName} />
      <meta property="article:author" content={orgName} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.desc} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={props.url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:width" content={imageWidth} />
      <meta property="og:image:height" content={imageHeight} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={siteName} />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.desc} />
      <meta name="twitter:creator" content={orgName} />
      {props.image && <meta name="twitter:image" content={image} />}

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#dfdfdf" />

      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
      />
      <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto&display=swap" />
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
      />
      <script src="/modernizr.js" type="text/javascript" defer></script>
      {props.css && <link rel="stylesheet" href={props.css} />}
      {props.js && <script src={props.js} defer></script>}
      {props.children}
    </Head>
  );
};
export default Meta;
