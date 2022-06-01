import { CardFilter, CardHome, H1Filter } from "./StyledCardHome"
import metalogin from "../img/metalogin.png"
import { Logometa } from "../../Pages/Login/styled"
import React, { useMemo, useState } from "react";
import { TextField } from "@mui/material";
import useRequestData from "../../Hooks/useRequestData";
import { base_Url } from "../../Constants/base_Url";
import useUnprotectedPage from "../../Hooks/useUnprotectedPage";


export const CardHomepage = () => {

//     const recipes = useRequestData([], `${base_Url}/`)
//     console.log(recipes)
// const recipesCards=recipes.map((recipe)=>{
//     return <p>{recipe.CardFilter}</p>
// })
    useUnprotectedPage()
    const comidas = [

    'Canjica',
    'milho',
    'bolo',
    ' Pé de moleque',
    'paçoca',
    'Cachorro-quente',

    ]
    const [search, setSearch] = useState('')

    const restaurantFilter = useMemo(() => {
        const lowerSearch = search.toLowerCase();
        return comidas.filter((comida) =>
            comida.toLowerCase().includes(lowerSearch));
    }, [search])
    const onChangeSearch = (event) => {
        setSearch(event.target.value)
      
        
    }
    return (
        
        <CardHome>
           <CardFilter>
                  <H1Filter>Filtro</H1Filter>
                <TextField
                    type={'text'}
                    onChange={onChangeSearch}
                    value={search}
                    margin={"none"}
                    variant="filled"
                    sx={{ width: 250, marginLeft: 8}}
                ></TextField>
           </CardFilter>
      <ul>
                {restaurantFilter.map((comida) => (
                    <li >{comida} </li>

                ))}

            </ul>
            <div>asd</div>
        </CardHome>

    )


} 