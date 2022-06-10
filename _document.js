import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

import { ServerStyleSheets } from '@material-ui/styles';
import { ServerStyleSheet } from 'styled-components'


class _Document extends Document {
  static async getInitialProps (ctx) {
    const styledComponentsSheet = new ServerStyleSheet();
    const materialSheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
        ctx.renderPage = () => originalRenderPage({ enhanceApp: App => props => styledComponentsSheet.collectStyles(materialSheets.collect(<App {...props}/>))});
        const initialProps = await Document.getInitialProps(ctx);
        return {
          ...initialProps,
          styles: (
            <React.Fragment>
              {initialProps.styles}
              {materialSheets.getStyleElement()}
              {styledComponentsSheet.getStyleElement()}
            </React.Fragment>
          );
        }
      } finally {
        styledComponentsSheet.seal();
      }
  }

  render() {
    return (
      <html lang="en" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}


export default _Document;