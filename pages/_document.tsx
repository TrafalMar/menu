import Document, { Html, Head, Main, NextScript } from "next/document";
import { Layout } from "../src/components/Layout/styles";

class MainDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <div id="root"></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MainDocument;
