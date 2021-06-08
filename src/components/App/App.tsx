import React, { useState, useEffect } from 'react';
import { filterStories, getTopStories, Story } from '../../utilities';
import { ArticleContainer } from '../ArticleContainer/ArticleContainer';
import FeaturedArticle from '../FeaturedArticle/FeaturedArticle';
import FilterForm from '../FilterForm/FilterForm';
import './App.css';
/**
 * Container for entire app
 * responsible for invoking apiCall methods
 * @returns A browser router that holds all components
 */

 function App() {
  const [currentStories, setCurrentStories] = useState([])
  const [currentList, setCurrentList] = useState([])
  const [featuredStory, setFeaturedStory] = useState() 
  useEffect( () => {
    if (!currentStories.length) {
      getTopStories('books')
      .then(data => {
        setCurrentStories(data.results)
        setCurrentList(data.results)
      })
    }
  }, [currentStories])
  
  const filterByCategory = (cat: string): void => {
    getTopStories(cat)
    .then(data => {
      setCurrentStories(data.results)
      setCurrentList(data.results)
    })
  }

  const filterBySearch = (term: string):void => {
    setCurrentStories(currentList.filter(article => filterStories(article, term)))
  }

  return (
    <div className="App">
      <section className="top">
        <FeaturedArticle></FeaturedArticle>
        <FilterForm filterByCategory={filterByCategory} filterBySearch={filterBySearch}></FilterForm>
        <h1>Article Archive</h1>
      </section>
      <ArticleContainer articles={currentStories}></ArticleContainer>
    </div>
  );
}

export default App;
