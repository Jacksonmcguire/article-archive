import React from 'react';
import { Link } from 'react-router-dom';
import { SiNewyorktimes } from 'react-icons/si'
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
    <div>
    <a href={link} className="link"><SiNewyorktimes/></a>

    <Link to={title} className="article">
      <h3>{title}</h3>
      <div className="card-info">
        <p>{byline}</p>
        <p>{date.split('T')[0].replaceAll('-', '/')}</p>
      </div>
    </Link>
    </div>
  );
}

export default Article;
