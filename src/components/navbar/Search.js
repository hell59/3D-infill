import React from 'react';
import SearchIcon from './img/Search-Icon.png'
import './navbar.css'

class Search extends React.Component{
    render(){
        return(
                <form className="search-wrapper">
                    <input className="Search-input" type="text" name="name" placeholder="Procurar....."/>
                    <button type="submit" value="Enviar" className="search-btn">
                        <img className="search-icon" src={SearchIcon} />
                    </button>      
                </form>
        );
    }
}

export default Search;