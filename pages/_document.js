import Document, { Html, Head, Main, NextScript } from "next/document";
import NavBar from "../components/NavBar";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="bg-background">
          <NavBar />
          <button onClick={() => alert("hello world")}>
            Hello Application
          </button>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
