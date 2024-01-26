import { Link } from "react-router-dom";

const roleColor = (role) => {
     return `
          ${ role === 'Peleador' ? 'text-warning' 
               : role === 'Tanque' ? 'text-success'
               : role === 'Asesino' ? 'text-danger'
               : role === 'Mago' ? 'text-primary'
               : 'text-info'
          } fw-medium`;
};

export const ChampionCard = ({
     id,
     name,
     alias,
     role,
     region,
     phrase,
     image_name,
}) => {

     const championImage = region === 'Noxus' ? `/assets/champions/noxus/${ image_name }` : `/assets/champions/demacia/${ image_name }`;
     
     return (
          <div className="col col-md-4 col-sm-7 animate__animated animate__fadeIn">
               <div className="card card-image-width">
                    <img src={ championImage } className="card-img-top" alt={ name }/>
                    <div className="card-body">
                         <h3 className="card-title">{ name }</h3>
                         <p className="card-text">{ alias }</p>
                    </div>
                    <ul className="list-group list-group-flush">
                         <li className="list-group-item">
                              <span className="fw-semibold">Rol: </span>
                              <span className={ roleColor(role) }>{ role }</span>
                         </li>
                         <li className="list-group-item"><span className="fw-semibold">Región: </span>{ region }</li>
                    </ul>
                    <div className="card-body">
                         <Link to={`/champion/${ id }/${ name }`}>Leer más...</Link>
                    </div>
               </div>
          </div>
     );
};