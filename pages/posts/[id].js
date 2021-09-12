import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import Layout from "../../components/Layout";
import { getPostById, getPostIds } from "../../lib/post";
import spinnerStyles from "../../styles/Spinner.module.css";

const Post = ({ post }) => {
  const router = useRouter();

  // If the page has not been created, is FallBack of the router equal to true
  // And the following temporary page will be rendered, Subsequent times that page will be included in the rerender list
  if (router.isFallback) {
    return (
      <Spinner
        animation="border"
        role="status"
        variant="dark"
        className={spinnerStyles.spinnerLg}
      >
        <span className="sr-only"></span>
      </Spinner>
    );
  }

  // When getStaticProps finishes running for the first time
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
  const paths = await getPostIds(5);
  // console.log(paths);

  return {
    paths,
    // fallback: false, // Any path not returned by getStaticPaths will go to page 404
    fallback: true, // Patches that do not return immediately will return the "temporary" page => wait for getStaticProps to run => getStaticProps finished => return complete page
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPostById(params.id);

  return {
    props: {
      post,
    },
    revalidate: 1,
  };
};

export default Post;
