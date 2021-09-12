import Link from 'next/link';
import React from "react";
import { Button, Card } from "react-bootstrap";
import Layout from "../../components/Layout";
import { getPostById, getPostIds } from "../../lib/post";

const Post = ({ post }) => {
  return (
    <Layout>
      <Card className="my-3 shadow">
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
          <Link href="/posts" passHref>
            <Button variant="dark">Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </Layout>
  );
};

// Gets static data, but which static data depends on the path params
export const getStaticPaths = async () => {
  const paths = await getPostIds();
  // console.log(paths);

  return {
    paths,
    fallback: false, // Any path not returned by getStaticPaths will go to page 404
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPostById(params.id);

  return {
    props: {
      post,
    },
  };
};

export default Post;
