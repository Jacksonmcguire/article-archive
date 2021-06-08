import React, { useState, useEffect } from 'react';
import { Route } from 'react-router';
import { filterStories, getFeaturedStories, getTopStories, Story } from '../../utilities';
import { ArticleContainer } from '../ArticleContainer/ArticleContainer';
import DetailedArticle from '../DetailedArticle/DetailedArticle';
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
  const [currentStory, setCurrentStory] = useState()

  useEffect( () => {
    if (!currentStories.length) {
      getTopStories('books')
      .then(data => {
        setCurrentStories(data.results)
        setCurrentList(data.results)
      })
      getFeaturedStories()
      .then(data => setFeaturedStory(data.results[0]))
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
        <h1>Article Archive</h1>
        <section className="top">
          <FeaturedArticle 
          story={featuredStory}
          ></FeaturedArticle>
          <FilterForm filterByCategory={filterByCategory} filterBySearch={filterBySearch}></FilterForm>
        </section>
        <ArticleContainer articles={currentStories}></ArticleContainer>
        <Route path="/:article" render={({match}) => {
          console.log(match.params.article)
          setCurrentStory(currentStories.find((story: Story) => story.title === match.params.article))
          
          return <DetailedArticle story={currentStory}/>
        }}></Route>
      </div>
  );
}

export default App;
