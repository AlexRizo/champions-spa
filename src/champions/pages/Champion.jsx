import { Link, useNavigate, useParams } from "react-router-dom";
import { getChampionById } from "../helpers";
import { useMemo } from "react";

export const Champion = () => {

     const { id } = useParams();

     const champion = useMemo(() => getChampionById(id), [id]);

     const navigate = useNavigate();
     
     const onNavigateBack = () => {
          navigate(-1);
     };

     if (!champion) {
          return (
               <div>
                    <h1>Error: 404</h1>
                    <p>Champion not found</p>
                    <Link to="/">Go home</Link>
               </div>
          );
     }
     
     return (
          <div className="row mt-5">
               <div className="col-6 animate__animated animate__fadeInLeft">
                    <img 
                         src={`/assets/champions/${ champion.region === 'Noxus' ? 'noxus' : 'demacia' }/${ champion.image_name }`}
                         alt={ champion.name }
                         className="img-thumbnail"
                    />
               </div>
               <div className="col-5">
                    <h2>{ champion.name }</h2>
                    <ul className="list-group list-group-flush">
                         <li className="list-group-item"><b>Alias: </b>{ champion.alias }</li>
                         <li className="list-group-item"><b>Rol: </b>{ champion.role }</li>
                         <li className="list-group-item"><b>Región: </b>{ champion.region }</li>
                    </ul>

                    <h4 className="mt-3">Frase:</h4>
                    <p>{ champion.phrase }.</p>

                    <button
                         className="btn btn-outline-primary"
                         onClick={ onNavigateBack }
                    >
                         Regresar
                    </button>
               </div>
          </div>
     )
}