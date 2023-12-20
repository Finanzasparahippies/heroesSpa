import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "../../ui"
import { DcPage, HeroePage, MarvelPage, SearchBar } from "../pages"

export const HeroesRoutes = () => {

    
    return (
    <>
        <NavBar/>

        <div className="container">

    <Routes>
        
        <Route path="marvel" element ={ <MarvelPage/> }/>
        <Route path="dc" element ={ <DcPage/> }/>

        <Route path="search" element ={ <SearchBar/> }/>
        <Route path="hero/:id" element ={ <HeroePage/> }/>

        <Route path="/*" element ={ <Navigate to="/marvel"/> }/>

    </Routes>


        </div>
    </> 
        )
}
