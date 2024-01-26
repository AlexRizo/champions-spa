import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { ChampionCard } from "../components";

import queryString from 'query-string';

export const Search = () => {
     const navigate = useNavigate();

     const { champion = '' } = queryString.parse(location.search);

     const { searchChampion, onInputChange } = useForm({
          searchChampion: ''
     });

     const onSearchSubmit = (e) => {
          e.preventDefault();

          if (searchChampion.trim().length <= 1) return;

          navigate(`?champion=${ searchChampion }`);
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
                    
                    <div className="col-7">
                         <h4>Resultados:</h4>
                         <hr />

                         <div className="alert alert-primary">
                              Buscar un campeón
                         </div>

                         <div className="alert alert-danger">
                              No se encontraron resultados para <b>{ champion }</b>
                         </div>

                         {/* <ChampionCard>
                              
                         </ChampionCard> */}
                    </div>
               </div>
          </>
     )
}