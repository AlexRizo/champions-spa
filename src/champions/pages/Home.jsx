import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
     return (
          <>
               <div className="d-flex f-row gap-5 col py-5">
                    <Link to={'/noxus'} className="card custom-card text-decoration-none">
                         <img src="/regions/noxus.jpg" className="custom-img card-img-top" alt="noxus"/>
                         <div className="card-body">
                              <h3 className="card-text text-center">NOXUS</h3>
                         </div>
                    </Link>    
                    <Link to={'/demacia'} className="card custom-card text-decoration-none">
                         <img src="/regions/demacia.jpg" className="custom-img card-img-top" width="800" alt="demacia"/>
                         <div className="card-body">
                              <h3 className="card-text text-center">DEMACIA</h3>
                         </div>
                    </Link>
               </div>
          </>
     )
}
