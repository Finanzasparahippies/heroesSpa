import { HeroeItem } from "./";
import { getHeroesByPublisher } from "../helpers"
import { useMemo } from "react";



export const HeroeList = ( {publisher} ) => {
    
    
    const heroesFuntion = useMemo( () => getHeroesByPublisher( publisher ), [publisher] ); 

    return (

    <div className="row row-cols-1 row-cols-md-3 g-3">
        {
            heroesFuntion.map( hero => (
                <HeroeItem 
                key={hero.id}
                {...hero}
                />
            ))


        }
    </div>

    )
}
