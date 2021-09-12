import Link from 'next/link';
import { Button, Jumbotron } from "react-bootstrap";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Jumbotron>
        <h1>My Next App</h1>
        <p>This is my Next.JS App.</p>
        <p>
          <Link href="/posts" passHref>
            <Button variant="primary">Posts</Button>
          </Link>
        </p>
      </Jumbotron>
    </Layout>
  );
}
