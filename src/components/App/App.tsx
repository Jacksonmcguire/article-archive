import React, { useState, useEffect } from 'react';
import { Route } from 'react-router';
import { filterStories, getTopStories, Story, categories } from '../../utilities';
import { ArticleContainer } from '../ArticleContainer/ArticleContainer';
import DetailedArticle from '../DetailedArticle/DetailedArticle';
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
  const [currentStory, setCurrentStory] = useState()

  useEffect(() => {
    if (!currentStories.length) {
      getTopStories(categories[0])
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
        <h1>Article Archive</h1>
          <FilterForm filterByCategory={filterByCategory} filterBySearch={filterBySearch}
          ></FilterForm>
        </section>
        <ArticleContainer articles={currentStories}></ArticleContainer>
        <Route path="/:article" render={({match}) => {
          const story = currentStories.find((story: Story) => story.title === match.params.article)
          return <DetailedArticle story={story}/>
        }}></Route>
      </div>
  );
}

export default App;
