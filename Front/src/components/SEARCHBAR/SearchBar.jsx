import { useState } from 'react';
import style from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const [nombre, setNombre] = useState('');

  const handleChange = (event) => {
    setNombre(event.target.value);
  };

  return (
    <div className={style.searchBar}>
      <input
        type="search" 
        className={style.input}
        value={nombre}
        onChange={handleChange}
      />
      <button className={style.searchButton} onClick={() => onSearch(nombre)}>
        Agregar
      </button>
    </div>
  );
}

export default SearchBar;