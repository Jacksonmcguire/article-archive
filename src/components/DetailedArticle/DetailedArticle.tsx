import React from 'react';
import './DetailedArticle.css';
import { Story } from '../../utilities'
import { Link } from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai";
import { SiNewyorktimes } from 'react-icons/si'


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
          <h3>{story?.title?  story.title : <Link to="/">Sorry we can't find what you're looking for, click me to go back home</Link>}</h3>
          <h4>{story?.byline} | {story?.published_date.split('T')[0].replaceAll('-', '/')}</h4>
        </header>
        <article className="detail-content">
          <p>
          {story?.abstract}
          </p>
          <a href={story?.url} className="link"><SiNewyorktimes/></a>
          <img src={story?.multimedia[0].url} alt="" />
        </article>
          <i>{story?.multimedia[0].caption}</i>

      </div>
  );
}

export default DetailedArticle;
