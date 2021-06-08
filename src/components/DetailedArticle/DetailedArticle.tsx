import React from 'react';
import './DetailedArticle.css';
import { Story } from '../../utilities'
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
      {story?.abstract}
      {story?.byline}
    </div>
  );
}

export default DetailedArticle;
