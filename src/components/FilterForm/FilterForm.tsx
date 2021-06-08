import React, {useState} from 'react';
import {categories, Story} from '../../utilities';
import './FilterForm.css';
/**
 * Responsible for filtering articles
 * @returns A form with a search and category input 
 */

 type FilterProps = {
  filterByCategory(cat:string): void;
  filterBySearch(term:string): void;
  // apiList: Api[];
}
function FilterForm({filterByCategory, filterBySearch}: FilterProps) {
  const [currentCategory, setCurrentCategory] = useState('')
  const [currentSearch, setCurrentSearch] = useState('')

  const categoryOpts = categories.map((category) => {
    return <option key={category}>{category}</option>
  })

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type !== "text") {
      setCurrentCategory(e.target.value)
      filterByCategory(e.target.value)
    } else {
      setCurrentSearch(e.target.value)
      filterBySearch(e.target.value)
    }
  }

  return (
    <div className="filter-form">
      <form>
        <select name="categories" onChange={handleChange} value={currentCategory}>
          <option value="" disabled>Select a Category:</option>
          {categoryOpts}
        </select>
        <input type="text" 
        placeholder={`Search ${currentCategory} articles`}
        onChange={handleChange}/>
      </form>
    </div>
  );
}

export default FilterForm;
