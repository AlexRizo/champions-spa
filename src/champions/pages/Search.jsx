import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { ChampionCard } from "../components";

import queryString from 'query-string';
import { getChampionsByName } from "../helpers";

export const Search = () => {
     const navigate = useNavigate();

     const { query = '' } = queryString.parse(location.search);

     const { searchChampion, onInputChange } = useForm({
          searchChampion: query
     });

     const champions = getChampionsByName(query);

     //? Cuando se escribe un ternario sin un return excplicito, 
     //? este regresará verdadero o falso, dependiendo de la condición;
     const showSearch = (query.length === 0);
     const showError = (query.length > 0) && champions.length === 0;

     const onSearchSubmit = (e) => {
          e.preventDefault();

          if (searchChampion.trim().length < 1) return;

          navigate(`?query=${ searchChampion }`);
     }
     
     return (
          <>
               <h1>Buscar</h1>
               <hr />

               <div className="row">
                    <div className="col-5">
                         <h4>Buscando</h4>
                         <hr />
                         <form onSubmit={ onSearchSubmit }>
                              <input 
                                   className="form-control"
                                   type="text"
                                   name="searchChampion"
                                   placeholder="Busca un campeón"
                                   autoComplete="off"
                                   value={ searchChampion }
                                   onChange={ onInputChange }
                              />
                              <button className="btn btn-outline-primary mt-1">Buscar</button>
                         </form>
                    </div>
                    
                    <div className="col-7 row">
                         <h4>Resultados:</h4>
                         <hr />

                         <div className="alert alert-primary" style={ { display: showSearch ? '' : 'none' } }>Buscar un campeón</div>

                         <div className="alert alert-danger" style={ { display: showError ? '' : 'none' } }>No se encontraron resultados para <b>{ query }</b></div>

                         {
                              champions.map(champion => (
                                        <ChampionCard 
                                             key={ champion.id }
                                             { ...champion }
                                        />
                              ))
                         }
                    </div>
               </div>
          </>
     )
}