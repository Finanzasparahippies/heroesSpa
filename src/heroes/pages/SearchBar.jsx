import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';

import { useForm } from "../../hooks/useForm";
import { HeroeItem } from "../components";
import { getHeroByName } from "../helpers";



export const SearchBar = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroByName(q);

  const showSearch = (q.length === 0) ;
  const showError = (q.length > 0) && ( heroes.length === 0);

  const {searchText, onInputChange } = useForm({
    searchText: q
  });


  const onSearchSubmit = (e) => {
    e.preventDefault();

    // if(searchText.trim().length <= 2) return;

    navigate( `?q=${searchText}`);
  }

  return (
    <>
    <h1>Search</h1>
    <hr />
    
    <div className="row">


    <div className="col-5">
      <h4>searching</h4>
      <hr />
      <form 
        action=""
        onSubmit={ onSearchSubmit}
        >
        <input 
        type="text" 
        placeholder="Search Hero" 
        className="form-control" 
        name="searchText" 
        autoComplete="off" 
        value={searchText}
        onChange={onInputChange}
        />
        <button className="btn btn-outline-secondary mt-1">
          Search
        </button>
      </form>
    </div>

    <div className="col-7">
        <h4>Results</h4>
        <hr />


      {/* {
        (q === '')
        ? <div className="alert alert-primary">Search a hero</div>
        : (heroes.length === 0) 
        && <div className="alert alert-danger">No hay heroe <b>{ q }</b> que mostrar</div>
      } */}

<div className="alert alert-primary animate__animated animate__fadeIn" style={ { display: showSearch ? '' : 'none'}}>
  Search a hero
</div>


<div className="alert alert-danger animate__animated animate__fadeIn" style={ { display: showError ? '' : 'none'}}>
  No hay heroe <b>{ q }</b> que mostrar
</div>
        {
          heroes.map( hero => (
            <HeroeItem key={ hero.id } { ...hero }/> 
          ))
        }

    </div>
    </div>
    </>
  )
}
