import Link from "next/link";
import React from "react";
import { Button, Card } from "react-bootstrap";
import Layout from "../../components/Layout";
import { getBooks } from "../../lib/book";

const Books = ({ books }) => {
  return (
    <Layout>
      {books.map((book, index) => (
        <Card className="my-3 shadow" key={index}>
          <Card.Body>
            <Card.Title>{book.bookName}</Card.Title>
            <Card.Text>{book.bookContent}</Card.Text>
            <Link href="/" passHref>
              <Button variant="dark">Back</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </Layout>
  );
};

// Data depends on each request
export const getStaticProps = async () => {
  const books = await getBooks();
  // console.log(books);

  return {
    props: {
      books,
    },
  };
};

export default Books;
