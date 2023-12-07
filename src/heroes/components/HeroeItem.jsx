import { Link } from "react-router-dom";

const CharactersByHero = ({alter_ego, characters}) => {
    // if (alter_ego === characters) return (<></>)

    return (alter_ego === characters) 
    ? <></>
    : <p>{characters}</p>
};


export const HeroeItem = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const HeroImg = `/assets/heroes/${id}.jpg`; 

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutter">
                    <div className="col-4">
                        <img src={ HeroImg } className="card-img" alt={superhero}/>
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{ superhero }</h5>
                            <p className="card-text">{ alter_ego }</p>

                                {/* {
                                    (alter_ego !== characters) && (<p>{characters}</p>)
                                } */}
                                <CharactersByHero characters={characters} alter_ego={alter_ego}/>

                                <p className="card-text">
                                    <small className="text-muted">{first_appearance}</small>
                                </p>

                                <Link to={`/hero/${id}`}>
                                    Mas info...
                                </Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
