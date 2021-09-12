import Link from 'next/link';
import React from "react";
import { Card } from "react-bootstrap";
import Layout from "../../components/Layout";
import { getPosts } from "../../lib/post";

const Posts = ({ posts }) => {
  return (
    <Layout>
      {posts?.map((post) => (
        <Card key={post.id} className="my-3 shadow">
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
            <Link href={`/posts/${post.id}`} passHref>
              <Card.Link>See More</Card.Link>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </Layout>
  );
};

// Get static data from backend/db/api
export const getStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
};

export default Posts;
