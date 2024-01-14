import { Html, Head, Main, NextScript, DocumentProps } from 'next/document';
import {
  DocumentHeadTags,
  documentGetInitialProps,
} from '@mui/material-nextjs/v14-pagesRouter';

export default function Document(props: DocumentProps) {
  return (
    <Html lang='en'>
      <Head>
        <DocumentHeadTags emotionStyleTags={[]} {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = documentGetInitialProps;
