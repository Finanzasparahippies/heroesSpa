import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";



export const HeroePage = () => {

    const { id, ...rest} = useParams();
    const navigate = useNavigate();

    const Hero = useMemo( () =>  getHeroById(id), [id] );

    const handleReturn = () => {
        navigate(-1);
    }

    if ( !Hero ) {
        return  <Navigate to="/marvel"/> 
    }

    return (
        <div className="row mt-4">
            <div className="col-4 animate__animated animate__fadeInLeft">
                <img 
                src={`/assets/heroes/${id}.jpg`} 
                alt={ Hero.superhero}
                className="img-thumbnail"
                />
            </div>

            <div className="col-8">
                <h3>{Hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b>{Hero.alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b>{Hero.publisher}</li>
                    <li className="list-group-item"><b>First Appeareance: </b>{Hero.first_appearance}</li>
                </ul>
                    <h5 className="mt-3"><b>Characters: </b></h5>
                    <p>{Hero.characters}</p>

                <button className="btn btn-outline-primary" onClick={handleReturn}>
                    Regresar
                </button>
            </div>
        </div>
    )
}
