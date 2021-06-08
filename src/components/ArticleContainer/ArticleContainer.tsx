import Article from '../Article/Article'
import './ArticleContainer.css'
import {Story} from '../../utilities'
export const ArticleContainer = ({articles}:any) => {
  const articleCards = articles.map((article:Story) => {
    return <Article
    byline={article.byline}
    title={article.title}
    date={article.published_date}
    link={article.url}
    key={article.title + article.published_date}
    />
  })
  
  return (
    <section className="articles">
      {articleCards}
    </section>
  )
}