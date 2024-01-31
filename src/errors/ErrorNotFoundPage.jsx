import { Link } from "react-router-dom"

export const ErrorNotFoundPage = () => {
     return (
          <div className="p-5">
               <h1>Error 404</h1>
               <p>No se ha encontrado nada relacionado a tu búsqueda.</p>
               <Link to="/">Inicio</Link>
               <hr />
          </div>
     )
}