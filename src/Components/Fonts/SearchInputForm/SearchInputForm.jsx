import React from 'react'
import './SearchInputForm.styles.css'
import lib_bg from '../../../Assets/auth.jpg'

function SearchInputForm()
  {
    return (
      <div className='search-input-form-container'>
        <input type="text" className='search-input' placeholder="Search Books"/>
        <button className="search-button">Search</button>
      </div>
    );
}

export default SearchInputForm