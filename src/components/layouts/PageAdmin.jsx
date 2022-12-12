import Head from 'next/head';

export const PageAdmin = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{`${title}`}</title>
        <meta name="og:title" content={`${title}`} />
      </Head>

      <main>{children}</main>

      <footer>footer</footer>
    </>
  );
};
