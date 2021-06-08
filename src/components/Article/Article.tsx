import React from 'react';
import { Link } from 'react-router-dom';
import './Article.css';
/**
 * Card component to show basic article information
 * Acts as a link to detailed view
 * @returns Article w/ relavant content
 */

type ArticleProps = {
  byline: string;
  title: string;
  date: string;
  link: string;
}
function Article({byline, title, date, link}: ArticleProps) {
  return (
    <Link to={title}>
    <div className="article">
      <h3>{title}</h3>
      <p>{byline}</p>
      <p>{date}</p>
      <a href={link}>link</a>
    </div>
    </Link>
  );
}

export default Article;
