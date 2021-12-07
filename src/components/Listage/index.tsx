import React from "react";
import { ListageStyles } from "./styles";

import SearchInput from "../SearchInput";
import Card from "../Card";

const books = [
  {
    url: "http://books.google.com/books/content?id=AfGEDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    title: "Sherlock Holmes: Obra completa",
    author: "Arthur Conan Doyle"
  },
  {
    url: "http://books.google.com/books/content?id=AfGEDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    title: "Sherlock Holmes: Obra completa",
    author: "Arthur Conan Doyle"
  },
  {
    url: "http://books.google.com/books/content?id=AfGEDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    title: "Sherlock Holmes: Obra completa",
    author: "Arthur Conan Doyle"
  },
  {
    url: "http://books.google.com/books/content?id=AfGEDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    title: "Sherlock Holmes: Obra completa",
    author: "Arthur Conan Doyle"
  },
  {
    url: "http://books.google.com/books/content?id=AfGEDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    title: "Sherlock Holmes: Obra completa",
    author: "Arthur Conan Doyle"
  },
]

const Listage: React.FC = () => {
  return (
    <ListageStyles>
      <div className="container">
        <div className="search-section">
          <SearchInput />
        </div>
        <div className="list-section">
          {
            books.map(({ url, title, author }) => {
              return (
                <Card
                  imageUrl={url}
                  title={title}
                  author={author}
                />
              )
            })
          }
          {/* <span className="badge-empty-search">
            You need place a book title in top field...
          </span> */}
        </div>
      </div>
    </ListageStyles>
  );
};

export default Listage;
