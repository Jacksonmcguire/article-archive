
export interface Story {
  section: string;
  subsection: string;
  title: string;
  abstract: string;
  url: string;
  uri: string;
  byline: string;
  item_type: string;
  updated_date: string;
  created_date: string;
  published_date: string;
  material_type_facet: string;
  kicker: string;
  des_facet: string[];
  org_facet: string[];
  per_facet: string[];
  geo_facet: string[];
  multimedia: object[];
  short_url: string;
}

export const categories = ['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world']

export const filterStories = (story: Story, search: string) => {
  let returnVal = false
  Object.values(story).forEach(value => {
    if (typeof value === 'string' && value.toLowerCase().includes(search.toLowerCase())) returnVal = true
  })
  return returnVal
}

export const getTopStories = (category: string):Promise<any> => {
  return fetch('https://api.nytimes.com/svc/topstories/v2/' + category + '.json?api-key=F059Cw09xTnYQt8mZGMY7utM5AAaO2LH')
  .then(res => res.json())
}

export const getFeaturedStories = () => {
  return fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=F059Cw09xTnYQt8mZGMY7utM5AAaO2LH')
  .then(res => res.json())
}
