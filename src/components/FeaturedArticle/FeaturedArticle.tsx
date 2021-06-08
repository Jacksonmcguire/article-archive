import React from 'react';
import { Story } from '../../utilities';
import './FeaturedArticle.css';
/**
 * Undecided if this will be a carousel / depends on time
 * Bare minimum will just be one large top story card
 * @returns Container for featured articles 
 */

 type FeaturedProps = {
  story?: Story
}
function FeaturedArticle({story}: FeaturedProps) {
  console.log(story)
  return (
    <div className="featured article">
      <h3>{story?.title}</h3>
      <p>{story?.byline}</p>
      <p>{story?.published_date}</p>
      <a href={story?.url}>link</a>
    </div>
  );
}

export default FeaturedArticle;
