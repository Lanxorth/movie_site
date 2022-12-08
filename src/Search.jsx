import React, { useState } from 'react';
import "./Search.css";

function Search({ handleSendRequest }) {
  const [title, setTitle] = useState('');

  const handleSubmit = () => {
    handleSendRequest(title);
    setTitle('');
  }

  const handleInputTitle = (event) => {
    event.preventDefault();
    const title = event.target.value;
    setTitle(title);
  }

  return (
    <div className="search">
      <input className="search-box" type="text" onChange={handleInputTitle} value={title} />
      <input className="button" type="submit" onClick={handleSubmit} value="Search" />
    </div>
  )
}

export default Search;
