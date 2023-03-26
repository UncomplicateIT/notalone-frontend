import Header from "next/head";

interface Props {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}

export const Head = ({ title, description, keywords, image }: Props) => {
  return (
    <Header>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Vatsal Sakariya" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta property="og:site_name" content="NotAlone" />
      <meta property="og:title" content={title} />
      <meta property="profile:first_name" content="Vatsal" />
      <meta property="profile:last_name" content="Sakariya" />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@vatsal0601" />
      <meta name="twitter:creator" content="@vatsal0601" />
      <meta property="og:url" content="https://not-alone.vercel.app" />
    </Header>
  );
};

Head.defaultProps = {
  title: "NotAlone",
  description:
    "NotAlone is an app with which helps such people write better, read better, and most importantly get help when needed the most.",
  keywords: "NotAlone, help, write, read, help, dyslexia",
  image: "https://not-alone.vercel.app/android-chrome-512x512.png",
};
