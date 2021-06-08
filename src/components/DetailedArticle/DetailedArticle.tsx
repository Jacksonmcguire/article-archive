import React from 'react';
import './DetailedArticle.css';
import { Story } from '../../utilities'
import { Link } from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai";

/**
 * Modal or main component that is displayed when an article is clicked
 * responsible for invoking apiCall methods
 * @returns Modal with article info 
 */
type DetailedProps = {
  story?: Story
}
function DetailedArticle({story}: DetailedProps) {
  
  return (
      <div className="details">
        <Link to="/">
          <AiOutlineClose className="close"></AiOutlineClose>
        </Link>
        <header>
          <h3>{story?.title}</h3>
          <h4>{story?.byline} | {story?.published_date.split('T')[0].replaceAll('-', '/')}</h4>
        </header>
        <article className="detail-content">
          <p>
          {story?.abstract}
          </p>
          <a href={story?.url}>Link to the article</a>
          <img src={story?.multimedia[0].url} alt="" />
        </article>
          <i>{story?.multimedia[0].caption}</i>

      </div>
  );
}

export default DetailedArticle;
