import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

//https://nextjs.org/docs/advanced-features/custom-document
//   <link rel="icon" href="/website_logo.png"></link> 