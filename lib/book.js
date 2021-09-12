import fs from "fs";
import path from "path";

const bookDir = path.join(process.cwd(), "books");

export const getBooks = () => {
  const bookFileName = fs.readdirSync(bookDir);
  const booksData = bookFileName.map((bookFileName) => {
    const fullBookPath = path.join(bookDir, bookFileName);
    const bookContent = fs.readFileSync(fullBookPath, "utf8");

    return {
      bookName: bookFileName.replace(/\.txt$/, ''),
      bookContent,
    };
  });

  return booksData;
};
