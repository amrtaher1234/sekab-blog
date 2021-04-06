import React from 'react';
import { getAllDocs, getDocBySlug, Doc } from '../../lib/docs';
import markdownToHtml from '../../lib/markdown';
import { GetStaticProps, GetStaticPaths } from 'next'
import Layout from '../../components/Layout';


const PostPage = (post: Doc) => {
  return (
    <>
      <Layout post={post} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const doc = getDocBySlug(slug as string);
  const content = await markdownToHtml(doc.content || '');

  return {
    props: {
      ...doc,
      content
    }
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const docs = getAllDocs();

  return {
    paths: docs.map((doc) => {
      return {
        params: {
          slug: doc.slug
        }
      };
    }),
    fallback: false
  };
}
export default PostPage;
