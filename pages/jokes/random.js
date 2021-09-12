import Link from "next/link";
import React from "react";
import { Button, Card } from "react-bootstrap";
import Layout from "../../components/Layout";
import { getRandomJoke } from "../../lib/joke";

const Random = ({ joke }) => {
  return (
    <Layout>
      <Card className="my-3 shadow">
        <Card.Body>
          <Card.Title>Here is your random joke for today</Card.Title>
          <Card.Text>{joke.value}</Card.Text>
          <Link href="/" passHref>
            <Button variant="dark">Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </Layout>
  );
};

// Data depends on each request
export const getServerSideProps = async () => {
  const joke = await getRandomJoke();
  // joke = false;

  if (!joke) {
    return {
      notFound: true, // 404 page
    };

    // Redirect
    // return {
    //   redirect: {
    //     destination: "/posts",
    //     permanent: false,
    //   },
    // };
  }

  return {
    props: {
      joke,
    },
  };
};

export default Random;
