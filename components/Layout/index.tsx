import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';
import { Doc } from '../../lib/docs';
import Header from '../header';

export default function Layout({ post }) {
    const [theme, setTheme] = useState('okaidia');
    const { content, meta, slug } = post as Doc;
    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta charSet="utf-8" />
                <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <meta name="robots" content="follow, index" />
                <link href="/favicon.ico" rel="shortcut icon" />
                <meta content={meta.description} name="description" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@vercel" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image} />
                <link
                    href={`https://unpkg.com/prismjs@0.0.1/themes/prism-${theme}.css`}
                    rel="stylesheet"
                />
            </Head>
            <Header />
            <article
                className="prose lg:prose-xl px-8 m-auto my-4 sm:my-16 sm:py-8 py-20"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </>
    );
};