import React from 'react';
import { CardStyles } from './styles';

interface Props {
  imageUrl: string,
  title: string,
  author: string
}

const Card: React.FC<Props> = ({ imageUrl, title, author }) => {
  return (
    <a href="">
      <CardStyles>
        <img
          alt=""
          className="image"
          src={imageUrl}
        />
        <h6 className="title">{title}</h6>
        <span className="author">{author}</span>
      </CardStyles>
    </a>
  )
}

export default Card;